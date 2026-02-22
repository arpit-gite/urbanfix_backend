import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import workflowRoutes from "./routes/workflow.routes.js";
import chatRoutes from "./routes/chat.routes.js";
import agentRoutes from "./routes/agent.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/workflow", workflowRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/agents", agentRoutes);

app.use(errorHandler);

export default app;
