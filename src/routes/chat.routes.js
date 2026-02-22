import express from "express";
import { chat } from "../controllers/chat.controller.js";
import { validate } from "../middlewares/validate.middleware.js";
import { chatSchema } from "../validations/chat.validation.js";

const router = express.Router();

router.post("/", validate(chatSchema), chat);

export default router;
