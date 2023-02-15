import { getFechas } from "../utils/invoicesStates";
import { getConnection } from "./../database/connection";

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
}

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
}

const addInvoice = async (data) => {
	try {
		const conn = await getConnection();

		// Esto esta en contracts Services, 
		// la función busca los contratos 
		// ya sea segun un contrato o en la fecha del día
		const existInvoice = await conn.query(
			`SELECT c.* FROM contracts c 
			WHERE c.day_cut= ${data.date} 
			AND c.id = ${data.contract_id} 
			AND NOT EXISTS 
			(SELECT id FROM invoices WHERE 
			invoices.from = '${data.from}' 
			AND invoices.contract_id=c.id);`
			);

		if (existInvoice.length === 0) {
			return {
				exist: "El contrato ya cuenta con la factura del mes creada",
				data: existInvoice.length,
			};
		} else {
			data = { ...data, ...getFechas(data.from) };

			const result = await conn.query("INSERT INTO `invoices` SET ?", data);
			return result;
		}
	} catch (error) {
		return { err: error.message };
	}
}

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
}

const deleteInvoice = async (id) => {
	try {
		const conn = await getConnection();
		const result = await conn.query("UPDATE `invoices` SET state = 'Anulada' WHERE id = ?", id);
		return result;
	} catch (error) {
		return { err: error.message };
	}
}

export const invoicesServices = {
	getInvoices,
	getInvoice,
	addInvoice,
	deleteInvoice
}