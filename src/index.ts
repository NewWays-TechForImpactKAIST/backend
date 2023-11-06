import express from "express";
import testHandler from "@api/test";
import "@config/env";

const app = express();
const port = 2300;

console.log(1);
console.log(process.env.NODE_ENV);
console.log(process.env.MONGO_CONNECTION_URI);
console.log(2);

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("TechForImpact Backend API Server");
});

app.use("/test", testHandler);

app.use((req, res) => {
  res.status(404).send("Not Found");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
