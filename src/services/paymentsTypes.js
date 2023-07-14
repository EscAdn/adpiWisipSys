import { getConnection } from "./../database/connection.js";

const getPaymentsTypes = async () => {
  try {
    const conn = await getConnection();
    const resut = await conn.query(
      `SELECT id, type as name, created_at, updated_at 
			FROM payment_types;`
    );
    return resut;
  } catch (error) {
    return error.message;
  }
};

const getPaymentType = async (id) => {
  try {
    const conn = await getConnection();
    const resut = await conn.query(
      `SELECT id, type as name, created_at, updated_at 
			FROM payment_types WHERE id = ?;`,
      id
    );
    return resut;
  } catch (error) {
    return error.message;
  }
};

const addPaymentType = async (data) => {
  try {
    const conn = await getConnection();
    const resut = await conn.query(`INSERT INTO payment_types SET ?;`, data);
    return resut;
  } catch (error) {
    return error.message;
  }
};

const updategetPaymentType = async (id, data) => {
  try {
    const conn = await getConnection();
    const resut = await conn.query(`UPDATE payment_types SET ? WHERE id = ?`, [
      data,
      id,
    ]);
    return resut;
  } catch (error) {
    return error.message;
  }
};

export const paymentsTypesServices = {
  getPaymentsTypes,
  getPaymentType,
  addPaymentType,
  updategetPaymentType,
};
