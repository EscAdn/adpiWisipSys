import app from "./app";
import cron from "node-cron";
import { getContracts } from "./utils/invoicesStates";

// Generar las Facturas, se ejecuta a la 1 A. M. todos los dias
cron.schedule("0 1 * * *", () => {
  getContracts();
  console.log("Generar facturas");
});

const main = () => {
  app.listen(app.get("port"));
  console.log(`*****CONEXION CORECTA PUERTO: ${app.get("port")}****`);
};

main();
