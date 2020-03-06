import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, Equal } from "typeorm";

import { OwnerEntity } from "shared/entity";


@Injectable()
export class OwnerService {

  constructor(@InjectRepository(OwnerEntity) private readonly ownerRepository: Repository<OwnerEntity>) { }

  public async getAll(): Promise<any[]> {
    return this.ownerRepository.find();
  }

  public getById(id: string): Promise<any> {
    return this.ownerRepository.findOne({ where: { id: Equal(id) } });
  }

  public create(newOwner: any) {
    return this.ownerRepository.save(newOwner);
  }

  public delete(id: string): Promise<any> {
    return this.ownerRepository.delete(id);
  }

  public update(updateEntity: any): Promise<any> {
    return this.ownerRepository.update(updateEntity.id, updateEntity);
  }
}
