import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

// Models
import { CreateCarDto } from "./models/create-car.dto";
import { UpdateCarDto } from "./models/update-car.dto";
import { CarEntity, ManufacturerEntity, OwnerEntity } from "shared/entity";
import { ObjectId } from "mongodb";


@Injectable()
export class CarService {
  constructor(
    @InjectModel("cars") private readonly carsRepository: Model<CarEntity>,
    @InjectModel("manufacturers") private readonly manufacturerRepository: Model<ManufacturerEntity>,
    @InjectModel("owners") private readonly ownerRepository: Model<OwnerEntity>
  ) {

  }

  public getAll(): Promise<CarEntity[]> {
    return this.carsRepository.find().exec();
  }

  public getById(id: string): Promise<CarEntity | null> {
    return this.carsRepository.findOne({ _id: new ObjectId(id) }).exec();
  }

  public async create(newCar: CreateCarDto): Promise<CarEntity> {
    const manufacturer: ManufacturerEntity | null = await this.manufacturerRepository.findOne({ _id: new ObjectId(newCar.manufacturerId) }).exec();

    if (!manufacturer) {
      throw new NotFoundException("Manufacturer not found");
    }

    const newCarEntity: CarEntity = new this.carsRepository(newCar);
    newCarEntity.manufacturerId = manufacturer._id;

    return newCarEntity.save();
  }

  public async delete(id: string): Promise<void> {
    await this.carsRepository.deleteOne({ _id: new ObjectId(id) }).exec();
  }

  public async update(updateModel: UpdateCarDto): Promise<void> {
    const updatedEntity: CarEntity | null = await this.carsRepository.findOne({ _id: new ObjectId(updateModel._id) });

    if (!updatedEntity) {
      throw new NotFoundException();
    }

    updatedEntity.price = updateModel.price;
    updatedEntity.firstRegistrationDate = updateModel.firstRegistrationDate;

    if (updateModel.manufacturerId) {
      const manufacturer: ManufacturerEntity | null = await this.manufacturerRepository.findOne({ _id: new ObjectId(updateModel.manufacturerId) });
      if (!manufacturer) {
        throw new NotFoundException("Manufacturer not found");
      }
      updatedEntity.manufacturerId = manufacturer!.id;
    }

    if (updateModel.owners && updateModel.owners.length) {
      for (const owner of updateModel.owners) {
        const ownerEntity: OwnerEntity = updatedEntity.owners.id(owner._id);
        ownerEntity.name = owner.name;
        ownerEntity.purchaseDate = owner.purchaseDate;
      }
    }

    await this.carsRepository.updateOne({ _id: updatedEntity.id }, updatedEntity).exec();
  }
}
