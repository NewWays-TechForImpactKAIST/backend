import express from "express";
import { Scrap } from "db/mongo";

const router: express.Router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
  return res.send("test route");
});

router.get("/mongo", (req: express.Request, res: express.Response) => {
  Scrap.find({}).then(data => {
    res.send(data);
  });
});

export default router;
