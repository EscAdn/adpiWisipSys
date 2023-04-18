import { getConnection } from "./../database/connection";

const getUsers = async () => {
  try {
    const conn = await getConnection();
    const result = await conn.query(
      `SELECT id, name, email, password, telephone, created_at, updated_at FROM users`
    );
    return result;
  } catch (e) {
    return e.message;
  }
};

const getUser = async (email, password) => {
  try {
    const conn = await getConnection();
    const result = await conn.query(
      `SELECT id, name, email, password, telephone, created_at, updated_at FROM users WHERE email = ? AND password = ?`,
      [email, password]
    );
    return result;
  } catch (e) {
    return e.message;
  }
};

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
  getUsers,
  getUser,
};
