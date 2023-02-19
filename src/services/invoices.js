import { getFechas } from "../utils/invoicesStates";
import { getConnection } from "./../database/connection";
import { contractsServices } from "./contracts";

const getInvoices = async () => {
  try {
    const conn = await getConnection();
    const result = await conn.query(
      "SELECT iv.`id`, cl.name as client, ad.address, pl.name as plan, pl.price, iv.`from`, iv.`to`, iv.`created_at`, iv.`updated_at`, iv.`die_date`, iv.`state` FROM `invoices` as iv, contracts as ct, clients as cl, plans as pl, addresses as ad WHERE iv.contract_id = ct.id AND ct.client_id = cl.id AND ct.plan_id = pl.id AND cl.address_id=ad.id ORDER BY iv.id DESC;"
    );
    return result;
  } catch (error) {
    return { err: error.message };
  }
};

const getInvoice = async (id) => {
  try {
    const conn = await getConnection();
    const result = await conn.query(
      "SELECT iv.`id`, cl.name as client, ad.address, pl.name as plan, pl.price, iv.`from`, iv.`to`, iv.`created_at`, iv.`updated_at`, iv.`die_date`, iv.`state` FROM `invoices` as iv, contracts as ct, clients as cl, plans as pl, addresses as ad WHERE iv.contract_id = ct.id AND ct.client_id = cl.id AND ct.plan_id = pl.id AND cl.addrss_id=ad.id AND iv.id = ? ORDER BY iv.id DESC;",
      id
    );
    return result;
  } catch (error) {
    return { err: error.message };
  }
};

const getInvoiceState = async (state) => {
	try {
		const conn = await getConnection();
		const result = await conn.query(
			`SELECT i.* FROM invoices as i, contracts as c 
			WHERE c.id=i.contract_id AND i.state="${state}";`
			);
	} catch(e) {
		return e.message;
	}
}

const updateInvoicesDie = async (die_date) => {
	try {
		const conn = await getConnection();
		const result = await conn.query(
			`UPDATE `invoices` SET `state`='Vencida' 
			WHERE die_date <= '${die_date}' 
			AND state = 'Activa' 
			AND NOT EXISTS 
			(SELECT id, state 
			FROM payment_promises as pp 
			WHERE pp.valid_until > '${die_date}' 
			AND pp.state = 'Activa');`
			);
		return result;
	} catch(e) {
		return e.message;
	}
}

// recibe {contract_id, from, date}
const addInvoice = async (data) => {
  try {
    const conn = await getConnection();

    // Esto esta en contracts Services,
    // la función busca los contratos
    // ya sea segun un contrato o en la fecha del día
    const existInvoice = await contractsServices.getContractsOfDate(
    	data.date, data.from, data.contract_id
    	);
    // return existInvoice;
    if (existInvoice.length === 0) {
      return {
        exist: "El contrato ya cuenta con la factura del mes creada",
        data: existInvoice.length,
      };
    } else {
    	delete data.date;
      data = { ...data, ...getFechas(data.from) };
      
      const result = await conn.query("INSERT INTO `invoices` SET ?", data);
      return result;
    }
  } catch (error) {
    return { err: error.message };
  }
};

const updateInvoice = async (id, data) => {
  try {
    const conn = await getConnection();
    const result = await conn.query("UPDATE `invoices` SET ? WHERE id = ?", [
      data,
      id,
    ]);
    return result;
  } catch (error) {
    return { err: error.message };
  }
};

const deleteInvoice = async (id) => {
  try {
    const conn = await getConnection();
    const result = await conn.query(
      "UPDATE `invoices` SET state = 'Anulada' WHERE id = ?",
      id
    );
    return result;
  } catch (error) {
    return { err: error.message };
  }
};

export const invoicesServices = {
  getInvoices,
  getInvoice,
  addInvoice,
  deleteInvoice,
};
