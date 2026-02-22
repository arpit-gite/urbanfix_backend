import Workflow from "../models/workflow.model.js";

export const saveWorkflow = async (agents) => {
  const workflow = await Workflow.findOneAndUpdate(
    {},
    { agents },
    { new: true, upsert: true }
  );
  return workflow;
};

export const getWorkflow = async () => {
  const workflow = await Workflow.findOne();
  return workflow || { agents: [] };
};
