import moment from "moment";
import { getConnection } from "../database/connection";


// Esto esta en contracts Services, 
// la función busca los contratos 
// ya sea segun un contrato o en la fecha del día
export const getContracts = async () => {
  let dia = moment().date();
  let hoy = moment().format("YYYY-MM-DD");

  const conn = await getConnection();
  const result = await conn.query(
    `SELECT c.* FROM contracts c WHERE c.day_cut= ${dia} AND NOT EXISTS (SELECT id FROM invoices WHERE invoices.from = '${hoy}' AND invoices.contract_id=c.id);`
  );
  if (result.length > 0) {
    result.map(async (x) => {
      let data = {
        contract_id: x.id,
        from: hoy,
        ...getFechas(hoy),
      };

      const conn = await getConnection();
      const result = await conn.query("INSERT INTO `invoices` SET ?", data);
    });
  }
};

export const disableContracts = async () => {
  let dia = moment().date();
  let hoy = moment().format("YYYY-MM-DD");

  const conn = await getConnection();
  const result = await conn.query(
    `SELECT i.* FROM invoices as i, contracts as c WHERE c.id=i.contract_id AND i.state="Vencida";`
  );

  if (result.length > 0) {
    result.map(async (x) => {
      let data = {
        state: "Deshabilitado",
      };

      // Deshabilitar en el router el contrato

      const conn = await getConnection();
      const result = await conn.query("UPDATE `contracts` SET ? WHERE id = ?", [
        data,
        x.contract_id,
      ]);
    });
  }
};

export const getFechas = (from, corte = 3) => {
  let data = {};
  data.to = moment(from).add(1, "M").add(-1, "d").format("YYYY-MM-DD");
  data.created_at = moment().format("YYYY-MM-DD");
  data.updated_at = moment().format("YYYY-MM-DD");
  data.die_date = moment(from).add(corte, "d").format("YYYY-MM-DD");
  data.state = "Activa"; //Vencida, Pagada

  return data;
};
