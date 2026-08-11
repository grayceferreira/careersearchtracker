import express, { Request, Response } from "express";
import { applications } from "./data/applicationRepository";

const app = express();

app.use(express.json());

app.post(
  "/applications",
  (req: Request, res: Response) => {
    applications.push(req.body);

    res.status(201).json(req.body);
  }
);

app.get(
  "/applications",
  (_req: Request, res: Response) => {
    res.json(applications);
  }
);

app.listen(3000);