import Joi from "joi";

export const workflowSchema = Joi.object({
  agents: Joi.array()
    .items(
      Joi.object({
        _id: Joi.string().optional(),
        name: Joi.string().min(1).required(),
        type: Joi.string().min(1).required()
      })
    )
    .required()
});
