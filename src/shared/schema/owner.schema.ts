import * as mongoose from "mongoose";

export const OwnerSchema = new mongoose.Schema({
  name: String,
  purchaseDate: String,
});

export const OwnerCollection = { name: "owners", schema: OwnerSchema };
