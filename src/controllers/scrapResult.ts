import { Request, Response } from "express";
import { ScrapResultModel } from "@/db/mongo";

export const getScrapResult = async (req: Request, res: Response) => {
  try {
    const scrapResults = await ScrapResultModel.find({});
    res.status(200).send(scrapResults);
  } catch (err) {
    console.log(err);
    res.status(500).send("scrapResult/getScrapResult: Internal Server Error");
  }
};
