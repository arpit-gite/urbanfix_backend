import mongoose from "mongoose";

const AgentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true }
  },
  { _id: true }
);

const WorkflowSchema = new mongoose.Schema(
  {
    agents: {
      type: [AgentSchema],
      default: []
    }
  },
  { timestamps: true }
);

const Workflow = mongoose.model("Workflow", WorkflowSchema);

export default Workflow;
