import { IsNotEmpty, IsString, IsPhoneNumber, IsUUID, IsMongoId } from "class-validator";

export class UpdateManufacturerDto {

  @IsNotEmpty()
  @IsMongoId()
  public readonly _id: string;

  @IsNotEmpty()
  @IsString()
  public readonly name: string;

  @IsNotEmpty()
  @IsPhoneNumber("UA")
  public readonly phone: string;
}
