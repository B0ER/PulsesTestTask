import { Injectable } from "@nestjs/common";
import { Repository, Equal } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

import { ManufacturerEntity } from "shared/entity";

// Models
import { CreateManufacturerDto } from "./models/create-manufacturer.dto";
import { UpdateManufacturerDto } from "./models/update-manufacturer.dto";


@Injectable()
export class ManufacturerService {

  constructor(@InjectRepository(ManufacturerEntity) private readonly manufacturerRepository: Repository<ManufacturerEntity>) { }

  public async getAll(): Promise<any[]> {
    return this.manufacturerRepository.find();
  }

  public getById(id: string): Promise<any> {
    return this.manufacturerRepository.findOne(id);
  }

  public create(newOwner: CreateManufacturerDto) {
    return this.manufacturerRepository.save(newOwner);
  }

  public delete(id: string): Promise<any> {
    return this.manufacturerRepository.delete(id);
  }

  public update(updateEntity: UpdateManufacturerDto): Promise<any> {
    return this.manufacturerRepository.update(updateEntity.id, updateEntity);
  }
}
