import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { OwnerController } from "./owner.controller";
import { OwnerService } from "./owner.service";
import { OwnerEntity } from "shared/entity";

@Module(
  {
    controllers: [OwnerController],
    providers: [OwnerService],
    imports: [TypeOrmModule.forFeature([OwnerEntity])]
  }
)
export class OwnerModule { }
