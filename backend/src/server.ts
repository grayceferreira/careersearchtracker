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

app.listen(3000);