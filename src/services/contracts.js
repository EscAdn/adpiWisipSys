import { getConnection } from "./../database/connection.js";

// Obtiene los contratos que facturan en la fecha indicada
// y no cuentan con factura generada del mes indicado
const getContractsOfDate = async (year, mount, contract_id = 0) => {
  try {
    const conn = await getConnection();
    let result = [];
    if (contract_id === 0) {
      result = await conn.query(
        `SELECT inv.* FROM invoices AS inv 
        JOIN contracts AS c ON c.id = inv.contract_id 
        WHERE inv.from LIKE "%${year}-${mount}%";`
      );
    } else {
      result = await conn.query(
        `SELECT inv.* FROM invoices AS inv 
        JOIN contracts AS c ON c.id = inv.contract_id 
        WHERE inv.from LIKE "%${year}-${mount}%" AND c.id = ${contract_id};`
      );
    }
    return result;
  } catch (e) {
    return e.message;
  }
};

const getContracts = async () => {
  try {
    const connection = await getConnection();
    const result = await connection.query(
      `SELECT c.*, cl.name as client, p.name as plan, 
      p.price, a.address 
      FROM contracts as c, clients as cl,
      plans as p, addresses as a 
      WHERE cl.id = c.client_id 
      AND p.id=c.plan_id 
      AND a.id=cl.address_id 
      ORDER BY c.id ASC;`
    );
    return result;
  } catch (error) {
    return error.message;
  }
};

const getContract = async (id) => {
  try {
    const connection = await getConnection();
    const result = await connection.query(
      `SELECT c.*, cl.name as client, p.name as plan, 
      p.price, a.address 
      FROM contracts as c, clients as cl,
      plans as p, addresses as a 
      WHERE cl.id = c.client_id 
      AND p.id=c.plan_id 
      AND a.id=cl.address_id
      AND c.id = ?`,
      id
    );
    return result;
  } catch (error) {
    return error.message;
  }
};

const addContract = async (data) => {
  try {
    const conn = await getConnection();
    const result = await conn.query(`INSERT INTO contracts SET ?`, data);
    return result;
  } catch (error) {
    return error.message;
  }
};

const updateContract = async (id, data) => {
  try {
    const conn = await getConnection();
    const result = await conn.query(`UPDATE contracts SET ? WHERE id = ?`, [
      data,
      id,
    ]);
    return result;
  } catch (error) {
    return error.message;
  }
};

const deleteContract = async (id) => {
  try {
    const connection = await getConnection();
    const result = await connection.query(
      `DELETE FROM contracts WHERE id = ?`,
      id
    );
    return result;
  } catch (error) {
    return error.message;
  }
};

export const contractsServices = {
  getContracts,
  getContract,
  addContract,
  updateContract,
  deleteContract,
  getContractsOfDate,
};
