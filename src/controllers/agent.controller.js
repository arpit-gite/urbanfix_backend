import { getAgents } from "../services/agent.service.js";

export const fetchAgents = async (req, res, next) => {
  try {
    const agents = await getAgents();
    res.status(200).json(agents);
  } catch (error) {
    next(error);
  }
};
