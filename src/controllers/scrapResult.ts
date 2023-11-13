import { Request, Response } from "express";
import { ScrapResultModel } from "@/db/model";
import { gini_simpson, shannon } from "@/utils/diversity";

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
  const { type, id } = req.params;

  const scrapResults = await ScrapResultModel.find({ council_id: id });

  if (scrapResults.length === 0) {
    res.status(404).send("scrapResult/getDiversity: Not Found");
    return;
  }

  const type_list = scrapResults[0].councilors.reduce((acc: string[], cur) => {
    return acc.concat([cur.party]);
  }, []);

  const diversity = gini_simpson(type_list);

  res.status(200).send({ diversity });
};
