import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

// Entity
import { CarEntity } from "./car.entity";


@Entity("owners")
export class OwnerEntity {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public name: string;

  @Column()
  public purchaseDate: string;

  @OneToMany(type => CarEntity, car => car.owner)
  public cars: CarEntity[];
}
