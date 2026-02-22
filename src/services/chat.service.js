import Workflow from "../models/workflow.model.js";

export const processChat = async (message) => {
  const workflow = await Workflow.findOne();

  const agentTypes = workflow?.agents.map((a) => a.type) || [];

  return `Workflow contains: ${agentTypes.join(
    ", "
  )}. You said: ${message}`;
};
