import { Controller, Get, HttpStatus, Put, Delete, Patch, Param, Body, NotFoundException } from "@nestjs/common";
import { OwnerService } from "./owner.service";

// Models
import { CreateOwnerDto } from "./models/create-owner.dto";
import { UpdateOwnerDto } from "./models/update-owner.dto";


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

    if (!result) {
      throw new NotFoundException();
    }

    return { status: HttpStatus.OK, data: result };
  }

  @Put()
  public async create(@Body() createModel: CreateOwnerDto) {
    await this.ownerService.create(createModel);
    return { status: HttpStatus.OK };
  }

  @Delete(":id")
  public async delete(@Param() id: string) {
    await this.ownerService.delete(id);
    return { status: HttpStatus.OK };
  }

  @Patch()
  public async update(@Body() updateEntity: UpdateOwnerDto) {
    await this.ownerService.update(updateEntity);
    return { status: HttpStatus.OK };
  }
}
