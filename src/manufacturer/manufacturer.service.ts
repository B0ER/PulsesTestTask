import { Injectable } from "@nestjs/common";
import { Repository, Equal } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

import { ManufacturerEntity } from "shared/entity";


@Injectable()
export class ManufacturerService {

  constructor(@InjectRepository(ManufacturerEntity) private readonly manufacturerRepository: Repository<ManufacturerEntity>) { }

  public async getAll(): Promise<any[]> {
    return this.manufacturerRepository.find();
  }

  public getById(id: string): Promise<any> {
    return this.manufacturerRepository.findOne({ where: { id: Equal(id) } });
  }

  public create(newOwner: any) {
    return this.manufacturerRepository.save(newOwner);
  }

  public delete(id: string): Promise<any> {
    return this.manufacturerRepository.delete(id);
  }

  public update(updateEntity: any): Promise<any> {
    return this.manufacturerRepository.update(updateEntity.id, updateEntity);
  }
}
