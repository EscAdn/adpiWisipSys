import express from "express";
import morgan from "morgan";
import cors from "cors";
// Routes
import addressRoute from "./routes/address.route";
import nodeRoute from "./routes/node.route";
import clientRoute from "./routes/client.route";
import planRoute from "./routes/plan.route";
import contractRoute from "./routes/contract.route";

const port = 3020;
const app = express();

app.use(cors());

app.set("port", process.env.PORT || port);

app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/address", addressRoute);
app.use("/api/node", nodeRoute);
app.use("/api/client", clientRoute);
app.use("/api/plan", planRoute);
app.use("/api/contract", contractRoute);

export default app;
