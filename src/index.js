import app from "./app";
import cron from "node-cron";
import moment from "moment";
import { getContracts,stateInvoices, statePaymentPromises, disableContracts } from "./utils/invoicesStates";

// Generar las Facturas, se ejecuta a la 1 A. M. todos los dias
cron.schedule("0 1 * * *", async () => {
  let day_of_date = moment().date();
  let date = moment().format("YYYY-MM-DD");
  // Generar Facturas del día
  await getContracts();

  // Actualizar Promesas de pago
  await statePaymentPromises(date);

  // Actualizar estado de las facturas {Vencidas}
  await stateInvoices(date);

  // Actualizar estado de los contratos
  await disableContracts(day_of_date, date);
  console.log("Generar facturas");
});

const main = () => {
  app.listen(app.get("port"));
  console.log(`*****CONEXION CORECTA PUERTO: ${app.get("port")}****`);
};

main();
