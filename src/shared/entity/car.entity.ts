import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

// Entity
import { ManufacturerEntity } from "./manufacturer.entity";
import { OwnerEntity } from "./owner.entity";


@Entity("cars")
export class CarEntity {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @ManyToOne(type => ManufacturerEntity, manufacturer => manufacturer.cars)
  public manufacturer: ManufacturerEntity;

  @Column()
  public price: number;

  @Column()
  public firstRegistrationDate: Date;

  @ManyToOne(type => OwnerEntity, owner => owner.cars)
  public owner: OwnerEntity;
}
