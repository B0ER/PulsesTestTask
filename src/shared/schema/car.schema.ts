import * as mongoose from "mongoose";

// Entity
import { OwnerSchema } from "./owner.schema";

export const CarSchema = new mongoose.Schema({
  name: String,
  manufacturerId: {type: String, ref: "manufacturers"},
  price: Number,
  firstRegistrationDate: Date,
  owners: [OwnerSchema]
});

export const CarCollection = { name: "cars", schema: CarSchema };
