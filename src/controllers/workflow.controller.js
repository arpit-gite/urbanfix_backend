import * as workflowService from "../services/workflow.service.js";

export const saveWorkflow = async (req, res, next) => {
  try {
    const { agents } = req.body;
    const workflow = await workflowService.saveWorkflow(agents);
    res.status(200).json(workflow);
  } catch (error) {
    next(error);
  }
};

export const getWorkflow = async (req, res, next) => {
  try {
    const workflow = await workflowService.getWorkflow();
    res.status(200).json(workflow);
  } catch (error) {
    next(error);
  }
};
