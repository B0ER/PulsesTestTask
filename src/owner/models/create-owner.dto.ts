import { IsNotEmpty, IsString, IsDateString } from "class-validator";

export class CreateOwnerDto {

  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsNotEmpty()
  @IsDateString()
  public purchaseDate: string;
}
