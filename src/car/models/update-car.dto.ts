import { IsNotEmpty, IsUUID, IsNumber, IsDateString, IsOptional } from "class-validator";


export class UpdateCarDto {
  @IsNotEmpty()
  @IsUUID()
  public id: string;

  @IsOptional()
  @IsUUID()
  public manufacturerId: string;

  @IsOptional()
  @IsUUID()
  public ownerId: string;

  @IsOptional()
  @IsNumber()
  public price: number;

  @IsOptional()
  @IsDateString()
  public firstRegistrationDate: Date;
}
