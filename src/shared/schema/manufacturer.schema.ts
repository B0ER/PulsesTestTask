import * as mongoose from "mongoose";

export const ManufacturerEntity = new mongoose.Schema({
  name: String,
  phone: String,
});

export const ManufacturerCollection = { name: "manufacturers", schema: ManufacturerEntity };
