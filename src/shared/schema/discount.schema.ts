import * as mongoose from "mongoose";
import { ObjectId } from "mongodb";

import { OwnerSchema } from "./owner.schema";

export const DiscountSchema = new mongoose.Schema({
  value: Number,
  owner: OwnerSchema,
  carIds: [{ type: String, ref: "cars"}]
});

export const DiscountCollection = { name: "discounts", schema: DiscountSchema };
