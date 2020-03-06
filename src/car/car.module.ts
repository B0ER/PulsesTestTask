import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { CarController } from "./car.controller";
import { CarService } from "./car.service";

// Entity
import { CarEntity, ManufacturerEntity, OwnerEntity } from "shared/entity";

@Module(
  {
    controllers: [CarController],
    providers: [CarService],
    imports: [TypeOrmModule.forFeature([CarEntity, ManufacturerEntity, OwnerEntity])]
  }
)
export class CarModule { }
