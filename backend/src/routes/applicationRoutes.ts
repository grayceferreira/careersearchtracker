import { Router } from "express";
import { getApplications } from "../controllers/applicationController";

const router = Router();

router.get("/", getApplications);

export default router;