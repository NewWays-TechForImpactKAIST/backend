import mongoose from "mongoose";
import * as process from "process";

import "@/config";
import { ScrapResultSchema } from "@/db/schema";

mongoose
  .connect(
    process.env.MONGO_CONNECTION_URI ||
      "mongodb://localhost:27017/techforimpact",
  )
  .then(() => {
    console.log("connected to mongoDB");
  })
  .catch(err => {
    console.log(err);
  });

export const ScrapResultModel = mongoose.model(
  "council",
  ScrapResultSchema,
  "local_council",
);
