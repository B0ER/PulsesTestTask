import { IsOptional, IsNotEmpty, IsDateString } from "class-validator";


export class CreateOwnerDto {
  @IsNotEmpty()
  @IsOptional()
  public readonly name: string;

  @IsDateString()
  @IsOptional()
  public readonly purchaseDate: string;
}
