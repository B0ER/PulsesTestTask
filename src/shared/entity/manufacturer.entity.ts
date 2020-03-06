import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity("manufacturers")
export class ManufacturerEntity {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public name: string;

  @Column()
  public phone: string;
}
