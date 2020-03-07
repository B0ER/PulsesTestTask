import { Controller, Get, HttpStatus, Put, Delete, Patch, Param, NotFoundException, Body } from "@nestjs/common";
import { CarService } from "./car.service";

// Models
import { CreateCarDto } from "./models/create-car.dto";
import { UpdateCarDto } from "./models/update-car.dto";

@Controller("cars")
export class CarController {
  constructor(private carService: CarService) { }

  @Get()
  public async getAll() {
    const result = await this.carService.getAll();
    return { status: HttpStatus.OK, data: result };
  }

  @Get(":id")
  public async getById(@Param("id") id: string) {
    const result = await this.carService.getById(id);

    if (!result) {
      throw new NotFoundException();
    }

    return { status: HttpStatus.OK, data: result };
  }

  @Put()
  public async create(@Body() createCar: CreateCarDto) {
    await this.carService.create(createCar);
    return { status: HttpStatus.OK };
  }

  @Delete(":id")
  public async delete(@Param("id") id: string) {
    await this.carService.delete(id);
    return { status: HttpStatus.OK };
  }

  @Patch()
  public async update(@Body() updateCar: UpdateCarDto) {
    await this.carService.update(updateCar);
    return { status: HttpStatus.OK };
  }
}
