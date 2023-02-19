import moment from "moment";
import { getConnection } from "../database/connection";
import { contractsServices } from "../services/contracts";
import { invoicesServices } from "../services/invoices";
import { paymentServices } from "../services/paymentPromises"

// Esto esta en contracts Services,
// la función busca los contratos
// ya sea segun un contrato o en la fecha del día
export const getContracts = async (dia, hoy) => {
  // let dia = moment().date();
  // let hoy = moment().format("YYYY-MM-DD");

  const result = await contractsServices.getContractsOfDate(dia, hoy);

  if (result.length > 0) {
    result.map(async (x) => {
      let data = {
        contract_id: x.id,
        from: hoy,
        ...getFechas(hoy),
      };

      const addInvoice = await invoicesServices.addInvoice(data);
    });
  }
};

// Actualizar estado de las promesas de pago
export const statePaymentPromises = async (hoy) => {
  await paymentServices.updateStatePaymentPromises(hoy);
}

// Actualizar estado de las facturas y promesas de pago
export const stateInvoices = async (hoy) => {
  
  const result = await invoicesServices.updateInvoicesDie(hoy);
}

// Deshabilitar contratos con facturas vencidas
export const disableContracts = async (dia, hoy) => {
  // let dia = moment().date();
  // let hoy = moment().format("YYYY-MM-DD");

  // Buscar Invoices "Vencidas"
  const result = await invoicesServices.getInvoiceState("Vencida");

  if (result.length > 0) {
    await result.map(async (x) => {
      let data = {
        state: "Deshabilitado",
      };

      // Deshabilitar en el router el contrato

      // Actualizar el contrato
      const result = await contractsServices.updateContract(x.contract_id, data);
    //   const conn = await getConnection();
    //   const result = await conn.query("UPDATE `contracts` SET ? WHERE id = ?", [
    //     data,
    //     x.contract_id,
    //   ]);
    });
  }
};

// Retorna un objeto con las fechas para el registro de facturas
export const getFechas = (from, corte = 3) => {
  let data = {};
  data.to = moment(from).add(1, "M").add(-1, "d").format("YYYY-MM-DD");
  data.created_at = moment().format("YYYY-MM-DD");
  data.updated_at = moment().format("YYYY-MM-DD");
  data.die_date = moment(from).add(corte, "d").format("YYYY-MM-DD");
  data.state = "Activa"; //Vencida, Pagada

  return data;
};
