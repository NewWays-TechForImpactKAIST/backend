import mongoose from "mongoose";
import * as process from "process";
import dotenv from "dotenv";

import { ScrapDataSchema } from "@db/schema";

dotenv.config();
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

export const Scrap = mongoose.model("council", ScrapDataSchema);
