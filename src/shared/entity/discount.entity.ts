import { Document, Types } from "mongoose";

import { OwnerEntity } from "./owner.entity";

export interface DiscountEntity extends Document {
  value: string;
  owner: OwnerEntity;
  carIds: Types.Array<string>;
}
