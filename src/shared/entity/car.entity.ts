import { Document, Types } from "mongoose";

import { OwnerEntity } from "./owner.entity";

export interface CarEntity extends Document {
  name: string;
  manufacturerId: string;
  price: number;
  firstRegistrationDate: Date;
  owners: Types.DocumentArray<OwnerEntity>;
}
