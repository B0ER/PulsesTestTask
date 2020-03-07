import * as mongoose from "mongoose";

export const OwnerEntity = new mongoose.Schema({
  name: String,
  purchaseDate: String,
});

export const OwnerCollection = { name: "owners", schema: OwnerEntity };
