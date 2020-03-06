import { Controller, Get, Res, Req, HttpStatus, Put, Delete, Patch, Param } from "@nestjs/common";
import { OwnerService } from "./owner.service";


@Controller("owners")
export class OwnerController {

  constructor(private readonly ownerService: OwnerService) {}

  @Get()
  public async getAll(@Res() res, @Req() req) {
    try {
      const result = await this.ownerService.getAll();
      return res.status(HttpStatus.OK).json({ status: HttpStatus.OK, data: result });
    } catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: HttpStatus.INTERNAL_SERVER_ERROR });
    }
  }

  @Get(":id")
  public async getById(@Res() res, @Req() req, @Param() id: string) {
    try {
      const result = await this.ownerService.getById(id);
      return res.status(HttpStatus.OK).json({ status: HttpStatus.OK, data: result });
    } catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: HttpStatus.INTERNAL_SERVER_ERROR });
    }
  }

  @Put()
  public async create(@Res() res, @Req() req) {
    try {
      await this.ownerService.create({});
      return res.status(HttpStatus.OK).json({ status: HttpStatus.OK });
    } catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: HttpStatus.INTERNAL_SERVER_ERROR });
    }
  }

  @Delete(":id")
  public async delete(@Res() res, @Req() req, @Param() id: string) {
    try {
      await this.ownerService.delete(id);
    } catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: HttpStatus.INTERNAL_SERVER_ERROR });
    }
  }

  @Patch()
  public async update(@Res() res, @Req() req) {
    try {
      await this.ownerService.update({});
    } catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: HttpStatus.INTERNAL_SERVER_ERROR });
    }
  }
}
