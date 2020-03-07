import { Document } from "mongoose";

export interface OwnerEntity extends Document {
  name: string;
  purchaseDate: string;
}
