import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { ManufacturerController } from "./manufacturer.controller";
import { ManufacturerService } from "./manufacturer.service";
import { ManufacturerEntity } from "shared/entity";

@Module(
  {
    controllers: [ManufacturerController],
    providers: [ManufacturerService],
    imports: [TypeOrmModule.forFeature([ManufacturerEntity])]
  }
)
export class ManufacturerModule { }
