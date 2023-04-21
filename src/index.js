import app from "./app";
import cron from "node-cron";
import moment from "moment";
import {
  getContracts,
  stateInvoices,
  statePaymentPromises,
  disableContracts,
} from "./utils/invoicesStates";

// Generar las Facturas, se ejecuta a la 1 A. M. todos los dias
cron.schedule("0 1 * * *", async () => {
  let dia = moment().date();
  let hoy = moment().format("YYYY-MM-DD");
  // Generar Facturas del día
  await getContracts();

  // Actualizar Promesas de pago
  await statePaymentPromises(hoy);

  // Actualizar estado de las facturas {Vencidas}
  await stateInvoices(hoy);

  // Actualizar estado de los contratos
  await disableContracts(dia, hoy);
  console.log("Generar facturas");
});

const main = () => {
  app.listen(app.get("port"));
  console.log(`*****CONEXION CORRECTA EN EL PUERTO: ${app.get("port")}****`);
};

main();
