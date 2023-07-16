import { getConnection } from "./../database/connection.js";
import { getFechas } from "../utils/invoicesStates.js";
import { contractsServices } from "./contracts.js";

const getInvoices = async () => {
  try {
    const conn = await getConnection();
    const result = await conn.query(
      `SELECT iv.id, cl.id as client_Id, cl.name as client, 
      ad.address, pl.name as plan, pl.price, 
      iv.from, iv.to, iv.created_at, iv.updated_at, 
      iv.die_date, iv.state 
      FROM invoices as iv, contracts as ct, clients as cl, 
      plans as pl, addresses as ad 
      WHERE iv.contract_id = ct.id 
      AND ct.client_id = cl.id 
      AND ct.plan_id = pl.id 
      AND cl.address_id=ad.id 
      ORDER BY iv.id DESC;`
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
      `SELECT iv.id, cl.id as client_id, cl.name as client, ad.address, 
      pl.name as plan, pl.price, iv.from, iv.to, iv.created_at, 
      iv.updated_at, iv.die_date, iv.state 
      FROM invoices as iv, contracts as ct, 
      clients as cl, plans as pl, addresses as ad 
      WHERE iv.contract_id = ct.id 
      AND ct.client_id = cl.id 
      AND ct.plan_id = pl.id 
      AND cl.address_id=ad.id 
      AND iv.id = ? 
      ORDER BY iv.id DESC;`,
      id
    );
    return result;
  } catch (error) {
    return { err: error.message };
  }
};

const getInvoiceState = async (id) => {
  try {
    const conn = await getConnection();
    const result = await conn.query(
      `SELECT state FROM invoices 
      WHERE id= ?;`,
      id
    );
    return result;
  } catch (e) {
    return { err: error.message };
  }
};

const updateInvoicesDie = async (die_date) => {
  try {
    const conn = await getConnection();
    const result = await conn.query(
      `UPDATE invoices SET state='Vencida' 
			WHERE die_date <= '${die_date}' 
			AND state = 'Activa' 
			AND NOT EXISTS 
			(SELECT id, state 
			FROM payment_promises as pp 
			WHERE pp.valid_until > '${die_date}' 
			AND pp.state = 'Activa');`
    );
    return result;
  } catch (e) {
    return { err: error.message };
  }
};

// recibe {contract_id, issue, die_date, day, mounth}
const addInvoice = async (data) => {
  try {
    const conn = await getConnection();
    const { day, mount, year, contract_id, from, to } = data;

    // Comprobar si existe una factura emitida para el contrato en este año y mes...
    const existInvoice = await contractsServices.getContractsOfDate(
      year,
      mount,
      contract_id
    );

    if (existInvoice.length >= 1) {
      return {
        exist: `El contrato ya cuenta con la factura`,
        invoice: existInvoice,
      };
    } else {
      delete data.day;
      delete data.mount;
      delete data.year;

      data = { ...data, ...getFechas(from) };

      const result = await conn.query(`INSERT INTO invoices SET ?`, data);
      return result;
    }
  } catch (error) {
    return { err: error.message };
  }
};

const updateInvoice = async (id, data) => {
  try {
    const conn = await getConnection();
    const result = await conn.query(`UPDATE invoices SET ? WHERE id = ?`, [
      data,
      id
    ]);
    return result;
  } catch (error) {
    return { err: error.message };
  }
};

const deleteInvoice = async (id) => {
  try {
    const conn = await getConnection();
    const result = await conn.query(`DELETE invoices WHERE id = ?`, id);
    return result;
  } catch (error) {
    return { err: error.message };
  }
};

export const invoicesServices = {
  getInvoices,
  getInvoice,
  getInvoiceState,
  addInvoice,
  updateInvoice,
  deleteInvoice,
};
