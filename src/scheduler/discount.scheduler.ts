import { Injectable, Logger } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { DateTime } from "luxon";

import { CarEntity, OwnerEntity, DiscountEntity } from "shared/entity";

@Injectable()
export class DiscountScheduler {
  private readonly logger = new Logger(DiscountScheduler.name);

  constructor(
    @InjectModel("cars") private readonly carsRepository: Model<CarEntity>,
    @InjectModel("discounts") private readonly discountsRepository: Model<DiscountEntity>) { }

  // @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  @Cron("*/5 * * * * *")
  public async handleCron() {
    const now = DateTime.utc();
    const owners: OwnerEntity[] = await this.carsRepository.aggregate([
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
            $lt: now.toJSDate(),
            $gt: now.minus({ months: 10 }).toJSDate()
          }
        }
      },
      { $project: { purchaseDat: 0 } }
    ]).exec();
    this.logger.log(JSON.stringify(owners));
  }
}
