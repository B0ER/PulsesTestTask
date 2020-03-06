import { Controller, Get, Res, Req, HttpStatus, Put, Delete, Patch, Param } from "@nestjs/common";
import { ManufacturerService } from "./manufacturer.service";


@Controller("manufacturers")
export class ManufacturerController {

  constructor(private readonly manufacturerService: ManufacturerService) { }

  @Get()
  public async getAll(@Res() res, @Req() req) {
    try {
      const result = await this.manufacturerService.getAll();
      return res.status(HttpStatus.OK).json({ status: HttpStatus.OK, data: result });
    } catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: HttpStatus.INTERNAL_SERVER_ERROR });
    }
  }

  @Get(":id")
  public async getById(@Res() res, @Req() req, @Param() id: string) {
    try {
      const result = await this.manufacturerService.getById(id);
      return res.status(HttpStatus.OK).json({ status: HttpStatus.OK, data: result });
    } catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: HttpStatus.INTERNAL_SERVER_ERROR });
    }
  }

  @Put()
  public async create(@Res() res, @Req() req) {
    try {
      await this.manufacturerService.create({});
      return res.status(HttpStatus.OK).json({ status: HttpStatus.OK });
    } catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: HttpStatus.INTERNAL_SERVER_ERROR });
    }
  }

  @Delete(":id")
  public async delete(@Res() res, @Req() req, @Param() id: string) {
    try {
      await this.manufacturerService.delete(id);
    } catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: HttpStatus.INTERNAL_SERVER_ERROR });
    }
  }

  @Patch()
  public async update(@Res() res, @Req() req) {
    try {
      await this.manufacturerService.update({});
    } catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: HttpStatus.INTERNAL_SERVER_ERROR });
    }
  }
}
