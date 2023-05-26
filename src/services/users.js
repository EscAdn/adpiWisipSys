import { getConnection } from "./../database/connection";

const getUsers = async () => {
  try {
    const conn = await getConnection();
    const result = await conn.query(
      `SELECT id, name, email, password, telephone, roles, created_at, updated_at FROM users`
    );
    return result;
  } catch (e) {
    return { err: e.message };
  }
};

const getUserExist = async (email) => {
  try {
    const conn = await getConnection();
    const result = await conn.query(
      `SELECT id, email, roles, created_at FROM users WHERE email = ?`,
      email
    );
    return result;
  } catch (e) {
    return { err: e.message };
  }
};

const getUserById = async (id) => {
  try {
    const conn = await getConnection();
    const result = await conn.query(
      `SELECT id, email, roles, created_at FROM users WHERE id = ?`,
      id
    );
    return result;
  } catch (e) {
    return { err: e.message };
  }
};

const getUser = async (email) => {
  try {
    const conn = await getConnection();
    const result = await conn.query(
      `SELECT id, name, email, password, telephone, roles, created_at, updated_at FROM users WHERE email = ?`,
      email
    );
    return result;
  } catch (e) {
    return { err: e.message };
  }
};

const addUser = async (data) => {
  try {
    const conn = await getConnection();
    const result = await conn.query(`INSERT INTO users SET ?`, data);
    return result;
  } catch (e) {
    return { err: e.message };
  }
};

export const userServices = {
  addUser,
  getUsers,
  getUser,
  getUserExist,
  getUserById,
};
