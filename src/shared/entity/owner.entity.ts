import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { DateTime } from "luxon";

// Entity
import { CarEntity } from "./car.entity";


@Entity("owners")
export class OwnerEntity {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public name: string;

  @Column({
    transformer: {
      from(value: Date): string {
        return DateTime.fromJSDate(value).toISODate();
      },
      to(value: string): Date {
        return DateTime.fromISO(value).toJSDate();
      }
    }
  })
  public purchaseDate: string;

  @ManyToOne(type => CarEntity, car => car.owner)
  public cars: CarEntity[];
}
