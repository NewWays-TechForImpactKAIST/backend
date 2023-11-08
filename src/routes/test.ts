import express from "express";

const router: express.Router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
  return res.send("test route");
});

export default router;
