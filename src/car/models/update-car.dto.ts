import { IsNotEmpty, IsNumber, IsDateString, IsOptional, IsMongoId, ValidateNested } from "class-validator";

import { UpdateOwnerDto } from "./update-owner.dto";


export class UpdateCarDto {
  @IsNotEmpty()
  @IsMongoId()
  public readonly _id: string;

  @IsOptional()
  @IsMongoId()
  public readonly manufacturerId: string;

  @ValidateNested()
  @IsOptional()
  public readonly owner: UpdateOwnerDto;

  @IsOptional()
  @IsNumber()
  public readonly price: number;

  @IsOptional()
  @IsDateString()
  public readonly firstRegistrationDate: Date;
}