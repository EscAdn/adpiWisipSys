import express from "express";
import morgan from "morgan";
import cors from "cors";
import config from "./config.js";
// Route
import addressRoute from "./routes/address.route.js";
import nodeRoute from "./routes/node.route.js";
import clientRoute from "./routes/client.route.js";
import planRoute from "./routes/plan.route.js";
import contractRoute from "./routes/contract.route.js";
import paymentRoute from "./routes/payment.route.js";
import paymentTypeRoute from "./routes/paymentType.route.js";
import invoiceRoute from "./routes/invoice.route.js";
import billRoute from "./routes/bill.route.js";
import usersRoute from "./routes/users.route.js";

const app = express();

app.use(cors());

app.set("port", config.port);

app.use(morgan("dev"));
app.use(express.json());

// Routes v1
app.use("/api/addresses", addressRoute);
app.use("/api/nodes", nodeRoute);
app.use("/api/plans", planRoute);
app.use("/api/clients", clientRoute);
app.use("/api/contracts", contractRoute);
app.use("/api/payments", paymentRoute);
app.use("/api/invoices", invoiceRoute);
app.use("/api/payments_types", paymentTypeRoute);
app.use("/api/bills", billRoute);
app.use("/api/users", usersRoute);

export default app;
