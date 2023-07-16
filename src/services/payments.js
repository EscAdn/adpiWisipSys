import { getConnection } from "./../database/connection.js";

const getPayments = async () => {
  try {
    const conn = await getConnection();
    const result = await conn.query(
      `SELECT id, valid_until, state, invoice, created_at, updated_at FROM payment_promises WHERE state='Activa'`
    );
    return result;
  } catch (e) {
    return { error: e.message };
  }
};

const getPayment = async (id) => {
  try {
    const conn = await getConnection();
    const result = await conn.query(
      `SELECT id, valid_until, state, invoice, created_at, updated_at FROM payment_promises WHERE id = ? AND state = 'Activa'`,
      id
    );
    return result;
  } catch (e) {
    return { error: e.message };
  }
};

const addPayment = async (data) => {
  try {
    const conn = await getConnection();
    const result = await conn.query(
      `INSERT INTO payment_promises SET ? `,
      data
    );
    return result;
  } catch (e) {
    return { error: e.message };
  }
};

const updatePayment = async (id, data) => {
  try {
    const conn = await getConnection();
    const result = await conn.query(
      `UPDATE payment_promises SET ? WHERE id = ?`,
      [data, id]
    );
    return result;
  } catch (e) {
    return { error: e.message };
  }
};

const deletePayment = async (id) => {
  try {
    const conn = await getConnection();
    const result = await conn.query(
      `DELETE * FROM payment_promises WHERE id = ?`,
      id
    );
    return result;
  } catch (e) {
    return { error: e.message };
  }
};

const updateStatePayment = async (now) => {
  try {
    const conn = await getConnection();
    const result = await conn.query(
      `UPDATE payment_promises 
			SET state='Vencida' 
			WHERE state = 'Activa' 
			AND valid_until < '${now}'`
    );
    return result;
  } catch (e) {
    return { error: e.message };
  }
};

export const paymentServices = {
  getPayments,
  getPayment,
  addPayment,
  updatePayment,
  deletePayment,
  updateStatePayment,
};
