import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { CarController } from "./car.controller";
import { CarService } from "./car.service";
import { CarCollection, OwnerCollection, ManufacturerCollection } from "shared/schema";

@Module(
  {
    controllers: [CarController],
    providers: [CarService],
    imports: [MongooseModule.forFeature([CarCollection, ManufacturerCollection, OwnerCollection])]
  }
)
export class CarModule { }
