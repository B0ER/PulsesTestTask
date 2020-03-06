import { Controller, Get, HttpStatus, Put, Delete, Patch, Param } from "@nestjs/common";
import { OwnerService } from "./owner.service";


@Controller("owners")
export class OwnerController {

  constructor(private readonly ownerService: OwnerService) { }

  @Get()
  public async getAll() {
    const result = await this.ownerService.getAll();
    return { status: HttpStatus.OK, data: result };
  }

  @Get(":id")
  public async getById(@Param() id: string) {
    const result = await this.ownerService.getById(id);
    return { status: HttpStatus.OK, data: result };
  }

  @Put()
  public async create() {
    await this.ownerService.create({});
    return { status: HttpStatus.OK };
  }

  @Delete(":id")
  public async delete(@Param() id: string) {
    await this.ownerService.delete(id);
    return { status: HttpStatus.OK };
  }

  @Patch()
  public async update() {
    await this.ownerService.update({});
    return { status: HttpStatus.OK };
  }
}
