import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

// Modules
import { CarModule } from "./car/car.module";
import { OwnerModule } from "./owner/owner.module";
import { ManufacturerModule } from "./manufacturer/manufacturer.module";

@Module({
  imports: [
    CarModule,
    OwnerModule,
    ManufacturerModule,
    TypeOrmModule.forRoot(),
  ],
})
export class AppModule { }
