import { Request, Response } from "express";
import { applications } from "../data/applicationRepository";

export const getApplications = (
  _req: Request,
  res: Response
): void => {
  res.json(applications);
};