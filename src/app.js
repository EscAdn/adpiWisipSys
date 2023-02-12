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
// Routes
import addressRoute from "./routes/address.route";
import nodeRoute from "./routes/node.route";
import clientRoute from "./routes/client.route";
import planRoute from "./routes/plan.route";
import contractRoute from "./routes/contract.route";
import paymentRoute from "./routes/payment.route";
import invoiceRoute from "./routes/invoice.route";

const port = 3001;
const app = express();

app.use(cors());

app.set("port", process.env.PORT || port);

app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/addresses", addressRoute);
app.use("/api/nodes", nodeRoute);
app.use("/api/clients", clientRoute);
app.use("/api/plans", planRoute);
app.use("/api/contracts", contractRoute);
app.use("/api/payments", paymentRoute);
app.use("/api/invoices", invoiceRoute);

export default app;
