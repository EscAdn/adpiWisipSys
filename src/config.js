import { config } from "dotenv";

config();

export default {
  host: process.env.HOST || "",
  database: process.env.DATABASE || "",
  user: process.env.USER || "",
  password: process.env.PASSWORD || "",
  port_db: process.env.PORT_DB || 3306,
  port: process.env.PORT || 3000,
};
