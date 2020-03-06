import { IsDateString, IsUUID, IsNotEmpty, IsNumber } from "class-validator";


export class CreateCarDto {
  @IsNotEmpty()
  @IsUUID()
  public manufacturerId: string;

  @IsNotEmpty()
  @IsUUID()
  public ownerId: string;

  @IsNotEmpty()
  @IsNumber()
  public price: number;

  @IsNotEmpty()
  @IsDateString()
  public firstRegistrationDate: Date;
}
