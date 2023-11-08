import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { testRouter, scrapResultRouter } from "@/routes";

const app = express();
const port = 2300;

app.use(express.json());

// Allow CORS from all origins
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("TechForImpact Backend API Server");
});

app.use("/test", testRouter);
app.use("/scrapResult", scrapResultRouter);

// Global 404 Handler
app.use((req, res) => {
  res.status(404).send("Not Found");
});

// Global Error Handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  if (req.xhr) {
    res.status(500).send("Internal Server Error");
  }
  next(err);
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
