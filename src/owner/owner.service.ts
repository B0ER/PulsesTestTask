import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { OwnerEntity } from "shared/entity";

// Models
import { CreateOwnerDto } from "./models/create-owner.dto";
import { UpdateOwnerDto } from "./models/update-owner.dto";


@Injectable()
export class OwnerService {

  constructor(@InjectRepository(OwnerEntity) private readonly ownerRepository: Repository<OwnerEntity>) { }

  public async getAll(): Promise<any[]> {
    return this.ownerRepository.find();
  }

  public getById(id: string): Promise<any> {
    return this.ownerRepository.findOne(id);
  }

  public create(newOwner: CreateOwnerDto) {
    return this.ownerRepository.save(newOwner);
  }

  public delete(id: string): Promise<any> {
    return this.ownerRepository.delete(id);
  }

  public update(updateEntity: UpdateOwnerDto): Promise<any> {
    return this.ownerRepository.update(updateEntity.id, updateEntity);
  }
}
