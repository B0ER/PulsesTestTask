import { Controller, Get, Res, Req, HttpStatus, Put, Delete, Patch, Param } from "@nestjs/common";
import { CarService } from "./car.service";

@Controller("cars")
export class CarController {
  constructor(private carService: CarService) { }

  @Get()
  public async getAll(@Res() res, @Req() req) {
    const result = await this.carService.getAll();
    return res.status(HttpStatus.OK).json({ status: HttpStatus.OK, data: result });
  }

  @Get(":id")
  public async getById(@Res() res, @Req() req, @Param() id: string) {
    const result = await this.carService.getById(id);
    return res.status(HttpStatus.OK).json({ status: HttpStatus.OK, data: result });
  }

  @Put()
  public async create(@Res() res, @Req() req) {
    await this.carService.create({});
    return res.status(HttpStatus.OK).json({ status: HttpStatus.OK });
  }

  @Delete(":id")
  public async delete(@Res() res, @Req() req, @Param() id: string) {
    await this.carService.delete(id);
  }

  @Patch()
  public async update(@Res() res, @Req() req) {
    await this.carService.update({});
    return res.status(HttpStatus.OK).json({ status: HttpStatus.OK });
  }
}
