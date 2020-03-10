import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ScheduleModule } from "@nestjs/schedule";

// Modules
import { CarModule } from "./car/car.module";
import { ManufacturerModule } from "./manufacturer/manufacturer.module";
import { SchedulerModule } from "scheduler/scheduler.module";

@Module({
  imports: [
    CarModule,
    ManufacturerModule,
    SchedulerModule,
    ScheduleModule.forRoot(),
    MongooseModule.forRoot("mongodb://localhost/testpulse", { useNewUrlParser: true }),
  ],
})
export class AppModule { }
