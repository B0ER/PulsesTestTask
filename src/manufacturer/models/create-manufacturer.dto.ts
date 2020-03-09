import { IsNotEmpty, IsString, IsPhoneNumber } from "class-validator";

export class CreateManufacturerDto {

  @IsNotEmpty()
  @IsString()
  public readonly name: string;

  @IsNotEmpty()
  @IsPhoneNumber("ZZ")
  public readonly phone: string;
}
