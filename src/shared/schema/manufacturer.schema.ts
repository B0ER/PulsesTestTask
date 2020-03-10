import * as mongoose from "mongoose";

export const ManufacturerSchema = new mongoose.Schema({
  name: String,
  phone: String,
});

export const ManufacturerCollection = { name: "manufacturers", schema: ManufacturerSchema };
