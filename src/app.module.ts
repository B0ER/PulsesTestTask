import { Module } from "@nestjs/common";

// Modules
import { CarModule } from "./car/car.module";
import { OwnerModule } from "./owner/owner.module";
import { ManufacturerModule } from "./manufacturer/manufacturer.module";

const MODULES = [
  CarModule,
  OwnerModule,
  ManufacturerModule
];

@Module({
  imports: [
    ...MODULES
  ],
})
export class AppModule { }
