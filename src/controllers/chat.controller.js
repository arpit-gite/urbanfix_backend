import { processChat } from "../services/chat.service.js";

export const chat = async (req, res, next) => {
  try {
    const { message } = req.body;
    const reply = await processChat(message);
    res.status(200).json({ reply });
  } catch (error) {
    next(error);
  }
};
