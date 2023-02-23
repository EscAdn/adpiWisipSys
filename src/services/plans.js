import { getConnection } from "./../database/connection";

const getPlans = async () => {
  try {
    const connection = await getConnection();
    const result = await connection.query(
      `SELECT * FROM plans`
      );
    return result;
  } catch (e) {
    return e.message;
  }
};

const getPlan = async (id) => {
  try {
    const connection = await getConnection();
    const result = await connection.query(
      `SELECT * FROM plans WHERE id = ?`,
      id
    );
    return result;
  } catch (e) {
    return e.message;
  }
};

const addPlan = async (data) => {
  try {
    const connection = await getConnection();
    const result = await connection.query(
      `INSERT INTO plans SET ?`,
      data);
    return result;
  } catch (e) {
    return e.message;
  }
};

const updatePlan = async (id, data) => {
  try {
    const connection = await getConnection();
    const result = await connection.query(
      `UPDATE plans SET ? WHERE id = ?`, 
      [data,id]
      );
    return result;
  } catch (e) {
    return e.message;
  }
};

export const plansServices = {
  getPlans,
  getPlan,
  addPlan,
  updatePlan,
};
