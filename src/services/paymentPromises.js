import { getConnection } from "./../database/connection";

const getPaymentsPromises = async () => {
  try {
    const conn = await getConnection();
    const resut = await conn.query("SELECT * FROM payment_promises;");
    return resut;
  } catch (error) {
    return { err: error.message };
  }
};

const getPaymentPromise = async (id) => {
  try {
    const conn = await getConnection();
    const result = await conn.query(
      "SELECT * FROM payment_promises WHERE id = ?;",
      id
    );
    return result;
  } catch (error) {
    return { err: error.message };
  }
};

const addPaymentPromise = async (data) => {
  try {
    const conn = await getConnection();
    const result = await conn.query(
      "INSERT INTO `payment_promises` SET ? ",
      data
    );
    return result;
  } catch (error) {
    return { err: error.message };
  }
};

const updatePaymentPromise = async (id, data) => {
  try {
    const conn = await getConnection();
    const result = await conn.query(
      "UPDATE `payment_promises` SET ? WHERE id = ?",
      [data, id]
    );
    return result;
  } catch (error) {
    return { err: error.message };
  }
};

const deletePaymentPromise = async (id) => {
  try {
    const conn = await getConnection();
    const resut = await conn.query(
      "DELETE * FROM  payment_promises WHERE id = ?",
      id
    );
    return resut;
  } catch (error) {
    return { err: error.message };
  }
};

// Actualiza el estado de una promesa de pago
// Se ejecuta todos los días a las 1 AM
const updateStatePaymentPromises = async (now) => {
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
  getPaymentsPromises,
  getPaymentPromise,
  addPaymentPromise,
  updatePaymentPromise,
  deletePaymentPromise,
  updateStatePaymentPromises,
};
