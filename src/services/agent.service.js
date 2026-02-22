import Agent from "../models/agent.model.js";

export const getAgents = async () => {
  return await Agent.find();
};
