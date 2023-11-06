import express, { Request, Response } from "express";
import { getScrapResult } from "@/controllers/scrapResult";

const router: express.Router = express.Router();

router.get("/", getScrapResult);

export default router;
