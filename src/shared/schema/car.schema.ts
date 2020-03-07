import * as mongoose from "mongoose";

// Entity
import { OwnerEntity } from "./owner.schema";

export const CarEntity = new mongoose.Schema({
  name: String,
  manufacturerId: String,
  price: Number,
  firstRegistrationDate: Date,
  owners: [OwnerEntity]
});

export const CarCollection = { name: "cars", schema: CarEntity };
