import { Controller, Get, Res, Req, HttpStatus, Put, Delete, Patch, Param } from "@nestjs/common";
import { ManufacturerService } from "./manufacturer.service";


@Controller("manufacturers")
export class ManufacturerController {

  constructor(private readonly manufacturerService: ManufacturerService) { }

  @Get()
  public async getAll(@Res() res, @Req() req) {
    const result = await this.manufacturerService.getAll();
    return res.status(HttpStatus.OK).json({ status: HttpStatus.OK, data: result });
  }

  @Get(":id")
  public async getById(@Res() res, @Req() req, @Param() id: string) {
    const result = await this.manufacturerService.getById(id);
    return res.status(HttpStatus.OK).json({ status: HttpStatus.OK, data: result });
  }

  @Put()
  public async create(@Res() res, @Req() req) {
    await this.manufacturerService.create({});
    return res.status(HttpStatus.OK).json({ status: HttpStatus.OK });
  }

  @Delete(":id")
  public async delete(@Res() res, @Req() req, @Param() id: string) {
    await this.manufacturerService.delete(id);
  }

  @Patch()
  public async update(@Res() res, @Req() req) {
    await this.manufacturerService.update({});
    return res.status(HttpStatus.OK).json({ status: HttpStatus.OK });
  }
}
