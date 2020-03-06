import { Controller, Get, HttpStatus, Put, Delete, Patch, Param, Body, HttpException, NotFoundException } from "@nestjs/common";
import { ManufacturerService } from "./manufacturer.service";

// Models
import { CreateManufacturerDto } from "./models/create-manufacturer.dto";
import { UpdateManufacturerDto } from "./models/update-manufacturer.dto";


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

    if (!result) {
      throw new NotFoundException();
    }

    return { status: HttpStatus.OK, data: result };
  }

  @Put()
  public async create(@Body() newManufacturer: CreateManufacturerDto) {
    await this.manufacturerService.create(newManufacturer);
    return { status: HttpStatus.OK };
  }

  @Delete(":id")
  public async delete(@Param() id: string) {
    await this.manufacturerService.delete(id);
    return { status: HttpStatus.OK };
  }

  @Patch()
  public async update(@Body() updateManufacturer: UpdateManufacturerDto) {
    await this.manufacturerService.update(updateManufacturer);
    return { status: HttpStatus.OK };
  }
}
