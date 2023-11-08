import { Request, Response } from "express";
import { ScrapResultModel } from "@/db/model";

export const getScrapResult = async (req: Request, res: Response) => {
  try {
    const scrapResults = await ScrapResultModel.find({});
    res.status(200).send(scrapResults);
  } catch (err) {
    console.log(err);
    res.status(500).send("scrapResult/getScrapResult: Internal Server Error");
  }
};

export const getDiversity = async (req: Request, res: Response) => {
  try {
    const scrapResults = await ScrapResultModel.find({});
    const diversity = scrapResults.map(scrapResult => {
      return {
        name: scrapResult.name,
        diversity: scrapResult.diversity,
      };
    });
    res.status(200).send(diversity);
  } catch (err) {
    console.log(err);
    res.status(500).send("scrapResult/getDiversity: Internal Server Error");
  }
};
