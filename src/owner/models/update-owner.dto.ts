import { IsEmail, IsNotEmpty, IsDate, IsString, IsDateString, IsUUID } from "class-validator";

export class UpdateOwnerDto {
  @IsNotEmpty()
  @IsUUID()
  public id: string;

  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsNotEmpty()
  @IsDateString()
  public purchaseDate: string;
}
