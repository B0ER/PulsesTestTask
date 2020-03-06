import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, Equal } from "typeorm";

import { CarEntity } from "shared/entity";


@Injectable()
export class CarService {
  constructor(@InjectRepository(CarEntity) private readonly carsRepository: Repository<CarEntity>) {

  }

  public async getAll(): Promise<any[]> {
    return this.carsRepository.find();
  }

  public getById(id: string): Promise<any> {
    return this.carsRepository.findOne({ where: { id: Equal(id) } });
  }

  public create(newOwner: any) {
    return this.carsRepository.save(newOwner);
  }

  public delete(id: string): Promise<any> {
    return this.carsRepository.delete(id);
  }

  public update(updateEntity: any): Promise<any> {
    return this.carsRepository.update(updateEntity.id, updateEntity);
  }
}
