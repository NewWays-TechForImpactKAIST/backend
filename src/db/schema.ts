import { Schema } from "mongoose";

export const ScrapResultSchema = new Schema({
  council_id: { type: String, unique: true, required: true },
  council_type: {
    type: String,
    enum: [
      "local_council",
      "national_council",
      "metropolitan_council",
      "local_leader",
      "metro_leader",
    ],
    required: true,
  },
  councilors: [
    {
      name: { type: String, required: true },
      party: { type: String, required: true },
    },
  ],
});
