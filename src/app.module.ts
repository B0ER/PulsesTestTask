import { Module } from "@nestjs/common";

// Modules
import { CarModule } from "./car/car.module";
import { ManufacturerModule } from "./manufacturer/manufacturer.module";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    CarModule,
    ManufacturerModule,
    MongooseModule.forRoot("mongodb://localhost/testpulse"),
  ],
})
export class AppModule { }
