//
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//
// En la BD mosificar created_at en address o nodes
// agregar day_cut en contracts
//
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//
import express from "express";
import morgan from "morgan";
import cors from "cors";
import config from "./config";
// Route
import addressRoute from "./routes/address.route";
import nodeRoute from "./routes/node.route";
import clientRoute from "./routes/client.route";
import planRoute from "./routes/plan.route";
import contractRoute from "./routes/contract.route";
import paymentRoute from "./routes/payment.route";
import paymentTypeRoute from "./routes/paymentType.route";
import invoiceRoute from "./routes/invoice.route";
import billRoute from "./routes/bill.route";
import usersRoute from "./routes/users.route";

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
app.use("/api/payments_type", paymentTypeRoute);
app.use("/api/bills", billRoute);
app.use("/api/users", usersRoute);

export default app;
