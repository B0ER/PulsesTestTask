import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { CarEntity } from "./car.entity";


@Entity("manufacturers")
export class ManufacturerEntity {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public name: string;

  @Column()
  public phone: string;

  @OneToMany(type => CarEntity, car => car.manufacturer)
  public cars: CarEntity[];
}
