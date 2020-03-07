import { IsMongoId, IsOptional } from "class-validator";


export class UpdateOwnerDto {
  @IsMongoId()
  public readonly _id: string;

  @IsOptional()
  public readonly name: string;

  @IsOptional()
  public readonly purchaseDate: string;
}
