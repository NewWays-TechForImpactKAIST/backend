import fs from "fs";
import path from "path";
import dotenv from "dotenv";

const NODE_ENV = process.env.NODE_ENV || "development";

if (!NODE_ENV) {
  throw new Error("NODE_ENV not specified");
}

const envFile = path.join(
  path.resolve(__dirname, "../../"),
  `.env.${NODE_ENV}`,
);

if (fs.existsSync(envFile)) {
  dotenv.config({
    path: envFile,
  });
}
