import { Controller, Get, HttpStatus, Put, Delete, Patch, Param } from "@nestjs/common";
import { ManufacturerService } from "./manufacturer.service";


@Controller("manufacturers")
export class ManufacturerController {

  constructor(private readonly manufacturerService: ManufacturerService) { }

  @Get()
  public async getAll() {
    const result = await this.manufacturerService.getAll();
    return { status: HttpStatus.OK, data: result };
  }

  @Get(":id")
  public async getById(@Param() id: string) {
    const result = await this.manufacturerService.getById(id);
    return { status: HttpStatus.OK, data: result };
  }

  @Put()
  public async create() {
    await this.manufacturerService.create({});
    return { status: HttpStatus.OK };
  }

  @Delete(":id")
  public async delete(@Param() id: string) {
    await this.manufacturerService.delete(id);
    return { status: HttpStatus.OK };
  }

  @Patch()
  public async update() {
    await this.manufacturerService.update({});
    return { status: HttpStatus.OK };
  }
}
