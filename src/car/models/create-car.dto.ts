import { IsDateString, IsNotEmpty, IsNumber, ValidateNested, IsMongoId } from "class-validator";

import { CreateOwnerDto } from "./create-owner.dto";


export class CreateCarDto {
  @IsNotEmpty()
  @IsMongoId()
  public readonly manufacturerId: string;

  @IsNotEmpty()
  @ValidateNested()
  public readonly owners: CreateOwnerDto[];

  @IsNotEmpty()
  @IsNumber()
  public readonly price: number;

  @IsNotEmpty()
  @IsDateString()
  public readonly firstRegistrationDate: Date;
}
