import { Schema } from "mongoose";

export const ScrapDataSchema = new Schema({
  council_id: String,
  council_type: String,
  councilors: String,
});
