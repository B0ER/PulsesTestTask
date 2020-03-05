import {Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, JoinColumn} from "typeorm";

// Entity
import { ManufacturerEntity } from "./manufacturer.entity";
import { OwnerEntity } from "./owner.entity";


@Entity("cars")
export class CarEntity {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @OneToOne(type => ManufacturerEntity)
  @JoinColumn()
  public manufacturer: ManufacturerEntity;

  @Column()
  public price: number;

  @Column()
  public firstRegistrationDate: Date;

  @OneToMany(type => OwnerEntity, owner => owner.cars)
  public owner: OwnerEntity;
}
