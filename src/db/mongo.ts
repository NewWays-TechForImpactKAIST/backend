import mongoose from "mongoose";
import {Schema} from "mongoose";
import * as process from "process";
import dotenv from "dotenv";

dotenv.config();
mongoose.connect(process.env.MONGO_CONNECTION_URI || "mongodb://localhost:27017/techforimpact")
    .then(()=>{
        console.log("connected to mongoDB");
    })
    .catch((err)=>{
        console.log(err);
    });

const ScrapDataSchema = new Schema({
    council_id: String,
    council_type: String,
    councilors: String,
});

export const Scrap = mongoose.model("council", ScrapDataSchema);
