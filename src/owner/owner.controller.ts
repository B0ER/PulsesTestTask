import { Controller, Get, Res, Req, HttpStatus, Put, Delete, Patch, Param } from "@nestjs/common";
import { OwnerService } from "./owner.service";


@Controller("owners")
export class OwnerController {

  constructor(private readonly ownerService: OwnerService) { }

  @Get()
  public async getAll(@Res() res, @Req() req) {
    const result = await this.ownerService.getAll();
    return res.status(HttpStatus.OK).json({ status: HttpStatus.OK, data: result });
  }

  @Get(":id")
  public async getById(@Res() res, @Req() req, @Param() id: string) {
    const result = await this.ownerService.getById(id);
    return res.status(HttpStatus.OK).json({ status: HttpStatus.OK, data: result });
  }

  @Put()
  public async create(@Res() res, @Req() req) {
    await this.ownerService.create({});
    return res.status(HttpStatus.OK).json({ status: HttpStatus.OK });
  }

  @Delete(":id")
  public async delete(@Res() res, @Req() req, @Param() id: string) {
    await this.ownerService.delete(id);
  }

  @Patch()
  public async update(@Res() res, @Req() req) {
    await this.ownerService.update({});
    return res.status(HttpStatus.OK).json({ status: HttpStatus.OK });
  }
}
