import { getConnection } from "./../database/connection";

const addUser = async (data) => {
  try {
    const conn = await getConnection();
    const result = await conn.query(`INSERT INTO users SET ?`, data);
    return result;
  } catch (error) {
    return e.message;
  }
};

export const userServices = {
  addUser,
};
