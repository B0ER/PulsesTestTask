import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { CarEntity, ManufacturerEntity, OwnerEntity } from "shared/entity";

// Models
import { CreateCarDto } from "./models/create-car.dto";
import { UpdateCarDto } from "./models/update-car.dto";


@Injectable()
export class CarService {
  constructor(
    @InjectRepository(CarEntity) private readonly carsRepository: Repository<CarEntity>,
    @InjectRepository(ManufacturerEntity) private readonly manufacturerRepository: Repository<ManufacturerEntity>,
    @InjectRepository(OwnerEntity) private readonly ownerRepository: Repository<OwnerEntity>
  ) {

  }

  public async getAll(): Promise<any[]> {
    return this.carsRepository.find();
  }

  public getById(id: string): Promise<any> {
    return this.carsRepository.findOne(id);
  }

  public async create(newCar: CreateCarDto) {
    const manufacturer = await this.manufacturerRepository.findOne(newCar.manufacturerId);

    if (!manufacturer) {
      throw new NotFoundException();
    }

    const owner = await this.ownerRepository.findOne(newCar.ownerId);
    if (!owner) {
      throw new NotFoundException();
    }

    const newCarEntity: CarEntity = Object.assign(newCar);
    newCarEntity.manufacturer = manufacturer;
    newCarEntity.owner = owner;

    return this.carsRepository.save(newCarEntity);
  }

  public delete(id: string): Promise<any> {
    return this.carsRepository.delete(id);
  }

  public async update(updateModel: UpdateCarDto): Promise<any> {
    const updatedEntity = await this.carsRepository.findOne(updateModel.id);

    if (!updatedEntity) {
      throw new NotFoundException();
    }

    updatedEntity.price = updateModel.price;
    updatedEntity.firstRegistrationDate = updateModel.firstRegistrationDate;

    if (updateModel.manufacturerId) {
      const manufacturer = await this.manufacturerRepository.findOne(updateModel.manufacturerId);
      updatedEntity.manufacturer = manufacturer as ManufacturerEntity;
    }

    if (updateModel.ownerId) {
      const owner = await this.ownerRepository.findOne(updateModel.ownerId);
      updatedEntity.owner = owner as OwnerEntity;
    }

    return this.carsRepository.update(updatedEntity.id, updatedEntity);
  }
}
