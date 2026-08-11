import express, { Request, Response } from "express";

const app = express();

app.get("/", (_req: Request, res: Response) => {
  res.send("Career Tracker API");
});

app.listen(3000, () => {
  console.log("Running on port 3000");
});
``