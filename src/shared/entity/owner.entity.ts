import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

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

  @ManyToOne(type => CarEntity, car => car.owner)
  public cars: CarEntity[];
}
