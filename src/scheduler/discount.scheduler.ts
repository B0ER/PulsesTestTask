import { Injectable, Logger } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { DateTime } from "luxon";

import { CarEntity, OwnerEntity, DiscountEntity } from "shared/entity";
import { ObjectId } from "mongodb";

const DISCOUNT_PERCENT = 0.2;

@Injectable()
export class DiscountScheduler {
  private readonly logger = new Logger(DiscountScheduler.name);

  constructor(
    @InjectModel("cars") private readonly carsRepository: Model<CarEntity>,
    @InjectModel("discounts") private readonly discountsRepository: Model<DiscountEntity>,
    @InjectModel("owners") private readonly ownersRepository: Model<OwnerEntity>) { }

  // @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  @Cron("*/5 * * * * *")
  public async handleCron() {
    const discountCars: CarEntity[] = await this.carsRepository.aggregate([
      { $addFields: { month: { $month: "$firstRegistrationDate" } } },
      {
        $match: {
          month: {
            $gte: 5,
            $lte: 8
          }
        }
      },
      { $project: { cars: 1 } }
    ]).exec();
    this.logger.log("discount cars", JSON.stringify(discountCars));

    if (!discountCars || discountCars.length < 1) {
      this.logger.log("discount cars empty");
      return;
    }


    const discountOwners: DiscountEntity[] = await this.carsRepository.aggregate([
      { $unwind: "$owners" },
      {
        $replaceRoot: {
          newRoot: "$owners"
        }
      },
      {
        $addFields: {
          purchaseDat: {
            $dateFromString: {
              dateString: "$purchaseDate"
            }
          }
        }
      },
      {
        $match: {
          purchaseDat: {
            $lt: DateTime.utc().minus({ months: 10 }).toJSDate()
          }
        }
      },
      { $project: { purchaseDat: 0 } }
    ]).exec();

    this.logger.log(JSON.stringify(discountOwners), "Discount owner:");
    if (!discountOwners || discountOwners.length < 1) {
      this.logger.log("discount owners empty");
      return;
    }

    const discountCarIds = discountCars.map((item) => item._id);

    const savePromises = discountOwners.map((discountOwner) => {
      return new Promise(async (res, rej) => {
        this.logger.log(JSON.stringify(discountOwner), "Owner:");

        // await this.ownersRepository.remove({ _id: new ObjectId(discountOwner._id) });

        const parentCars: CarEntity[] = await this.carsRepository.find({ where: { owners: { _id: new ObjectId(discountOwner._id) } } })

        this.logger.log(JSON.stringify(parentCars));
        if (parentCars && parentCars.length > 0) {
          for (const car of parentCars) {
            this.logger.log(JSON.stringify(car), "Car");
            await car.owners.id(discountOwner._id).remove();
            await car.save();
          }
        }

        const newDiscount = new this.discountsRepository({
          value: DISCOUNT_PERCENT,
          owner: discountOwner,
          carIds: discountCarIds
        });
        this.logger.log(JSON.stringify(newDiscount), "NewDiscounts:");
        await newDiscount.save();
        return res();
      });
    });

    await Promise.all(savePromises).catch(err => this.logger.error(err));
  }
}
