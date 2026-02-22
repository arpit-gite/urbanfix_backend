import express from "express";
import { fetchAgents } from "../controllers/agent.controller.js";

const router = express.Router();

router.get("/", fetchAgents);

export default router;
