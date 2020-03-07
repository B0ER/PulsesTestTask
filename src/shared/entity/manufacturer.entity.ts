import { Document } from "mongoose";

export interface ManufacturerEntity extends Document {
  name: string;
  phone: string;
}
