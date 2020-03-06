import { Controller, Get, HttpStatus, Put, Delete, Patch, Param } from "@nestjs/common";
import { CarService } from "./car.service";

@Controller("cars")
export class CarController {
  constructor(private carService: CarService) { }

  @Get()
  public async getAll() {
    const result = await this.carService.getAll();
    return { status: HttpStatus.OK, data: result };
  }

  @Get(":id")
  public async getById(@Param() id: string) {
    const result = await this.carService.getById(id);
    return { status: HttpStatus.OK, data: result };
  }

  @Put()
  public async create() {
    await this.carService.create({});
    return { status: HttpStatus.OK };
  }

  @Delete(":id")
  public async delete(@Param() id: string) {
    await this.carService.delete(id);
    return { status: HttpStatus.OK };
  }

  @Patch()
  public async update() {
    await this.carService.update({});
    return { status: HttpStatus.OK };
  }
}
