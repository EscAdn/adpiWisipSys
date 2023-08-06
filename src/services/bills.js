import { getConnection } from "./../database/connection.js";

const getBills = async () => {
  try {
    const conn = await getConnection();
    const resut = await conn.query(
      `SELECT b.id, b.date, b.concept, b.payment_type_id, b.client_name, 
      b.amount_income, b.amount_discharge, b.created_at, b.updated_at 
      FROM bills as b ORDER BY id ASC;`
    );
    return resut;
  } catch (error) {
    return error.message;
  }
};

const getBill = async (id) => {
  try {
    const conn = await getConnection();
    const resut = await conn.query(
      `SELECT b.id, b.date, b.concept, b.payment_type_id, b.client_name, 
      b.amount_income, b.amount_discharge, b.created_at, b.updated_at 
      FROM bills as b WHERE b.id = ?;`,
      id
    );
    return resut;
  } catch (error) {
    return error.message;
  }
};

const addBill = async (data) => {
  try {
    const conn = await getConnection();
    const resut = await conn.query(`INSERT INTO bills SET ?;`, data);
    return resut;
  } catch (error) {
    return error.message;
  }
};

const updateBill = async (id, data) => {
  try {
    const conn = await getConnection();
    const resut = await conn.query(`UPDATE bills SET ? WHERE id = ?;`, [
      data,
      id,
    ]);
    return resut;
  } catch (error) {
    return error.message;
  }
};

const deleteBill = async (id) => {
  try {
    const conn = await getConnection();
    const resut = await conn.query(`DELETE FROM bills WHERE id = ?;`, id);
    return resut;
  } catch (error) {
    return error.message;
  }
};

export const buillsServices = {
  getBills,
  getBill,
  addBill,
  updateBill,
  deleteBill,
};
