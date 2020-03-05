import { Controller, Get, Res, Req, HttpStatus, Put, Delete, Patch, Param } from "@nestjs/common";
import { CarService } from "./car.service";

@Controller("cars")
export class CarController {
  constructor(private carService: CarService) {

  }

  @Get()
  public async getAll(@Res() res, @Req() req) {
    try {
      return res.status(HttpStatus.OK).json({ message: "Some message" });
    } catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: HttpStatus.INTERNAL_SERVER_ERROR });
    }
  }

  @Get(":id")
  public async getById(@Res() res, @Req() req, @Param() id: string) {
    try {
      return res.status(HttpStatus.OK).json({ message: "Some message" });
    } catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: HttpStatus.INTERNAL_SERVER_ERROR });
    }
  }

  @Put()
  public async create(@Res() res, @Req() req) {
    try {
      return res.status(HttpStatus.OK).json({ message: "Some message" });
    } catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: HttpStatus.INTERNAL_SERVER_ERROR });
    }
  }

  @Delete()
  public async delete(@Res() res, @Req() req) {
    try {
      return res.status(HttpStatus.OK).json({ message: "Some message" });
    } catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: HttpStatus.INTERNAL_SERVER_ERROR });
    }
  }

  @Patch()
  public async update(@Res() res, @Req() req) {
    try {
      return res.status(HttpStatus.OK).json({ message: "Some message" });
    } catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: HttpStatus.INTERNAL_SERVER_ERROR });
    }
  }
}
