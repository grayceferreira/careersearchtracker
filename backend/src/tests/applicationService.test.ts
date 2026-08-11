import { Request, Response, NextFunction } from "express";

export const validateApplication = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { company, role } = req.body;

  if (!company || !role) {
    res.status(400).json({
      error: "Company and role are required"
    });
    return;
  }

  next();
};