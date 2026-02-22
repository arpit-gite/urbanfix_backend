import express from "express";
import {
  saveWorkflow,
  getWorkflow
} from "../controllers/workflow.controller.js";
import { validate } from "../middlewares/validate.middleware.js";
import { workflowSchema } from "../validations/workflow.validation.js";

const router = express.Router();

router.post("/", validate(workflowSchema), saveWorkflow);
router.get("/", getWorkflow);

export default router;
