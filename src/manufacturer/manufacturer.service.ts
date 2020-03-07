import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ObjectId } from "mongodb";
import { Model } from "mongoose";

// Models
import { CreateManufacturerDto } from "./models/create-manufacturer.dto";
import { UpdateManufacturerDto } from "./models/update-manufacturer.dto";
import { ManufacturerEntity } from "shared/entity";


@Injectable()
export class ManufacturerService {

  constructor(@InjectModel("manufacturers") private readonly manufacturerRepository: Model<ManufacturerEntity>) { }

  public getAll(): Promise<ManufacturerEntity[]> {
    return this.manufacturerRepository.find().exec();
  }

  public getById(_id: string): Promise<ManufacturerEntity | null> {
    return this.manufacturerRepository.findOne({ _id: new ObjectId(_id) }).exec();
  }

  public async create(newManufacturer: CreateManufacturerDto): Promise<void> {
    const newManufacturerEntity = new this.manufacturerRepository(newManufacturer);
    await newManufacturerEntity.save();
  }

  public async delete(_id: string): Promise<void> {
    await this.manufacturerRepository.deleteOne({ _id: new ObjectId(_id) }).exec();
  }

  public async update(updateEntity: UpdateManufacturerDto): Promise<void> {
    await this.manufacturerRepository.update({ _id: new ObjectId(updateEntity._id) }, updateEntity).exec();
  }
}
