import { IsNotEmpty, IsString, IsPhoneNumber, IsUUID } from "class-validator";

export class UpdateManufacturerDto {

  @IsNotEmpty()
  @IsUUID()
  public id: string;

  @IsNotEmpty()
  @IsString()
  public name: string;

  @IsNotEmpty()
  @IsPhoneNumber("UA")
  public phone: string;
}
