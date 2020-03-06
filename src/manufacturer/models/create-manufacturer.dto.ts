import { IsNotEmpty, IsString, IsPhoneNumber } from "class-validator";

export class CreateManufacturerDto {

  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsNotEmpty()
  @IsPhoneNumber("UA")
  public phone: string;
}
