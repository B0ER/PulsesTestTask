import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { CarCollection, ManufacturerCollection, OwnerCollection, DiscountCollection } from "shared/schema";
import { DiscountScheduler } from "./discount.scheduler";


@Module(
  {
    providers: [DiscountScheduler],
    imports: [MongooseModule.forFeature([CarCollection, ManufacturerCollection, OwnerCollection, DiscountCollection])]
  }
)
export class SchedulerModule { }
