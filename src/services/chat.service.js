import Workflow from "../models/workflow.model.js";
import { generateAIResponse } from "./ai.service.js";

export const processChat = async (message) => {
  const workflow = await Workflow.findOne();

  const agentTypes =
    workflow?.agents.map(a => a.type).join(", ") ||
    "No agents configured";

  const systemPrompt = `
    You are an AI workflow assistant.

    The current workflow contains these agents:
    ${agentTypes}

    Simulate how these agents would process the user's request.
    Respond clearly and professionally.
  `;

  const finalPrompt = `
    System Context:
    ${systemPrompt}

    User Message:
    ${message}
  `;

  const aiResponse = await generateAIResponse(finalPrompt);

  return aiResponse;
};
