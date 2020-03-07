import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { ManufacturerController } from "./manufacturer.controller";
import { ManufacturerService } from "./manufacturer.service";
import { CarCollection, ManufacturerCollection, OwnerCollection } from "shared/schema";

@Module(
  {
    controllers: [ManufacturerController],
    providers: [ManufacturerService],
    imports: [MongooseModule.forFeature([CarCollection, ManufacturerCollection, OwnerCollection])]
  }
)
export class ManufacturerModule { }
