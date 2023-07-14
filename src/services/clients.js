import { getConnection } from "./../database/connection.js";

const getClients = async () => {
  try {
    const conn = await getConnection();
    const result = await conn.query(
      `SELECT c.*, a.address 
			FROM clients as c, addresses as a 
			WHERE a.id = c.address_id 
			ORDER BY c.id`
    );
    return result;
  } catch (e) {
    res.error(e.message);
  }
};

const getClient = async (id) => {
  try {
    const connection = await getConnection();
    const result = await connection.query(
      `SELECT * FROM clients WHERE id = ?`,
      id
    );
    return result;
  } catch (e) {
    return e.message;
  }
};

const addClient = async (data) => {
  try {
    const connection = await getConnection();
    const result = await connection.query(`INSERT INTO clients SET ?`, data);
    return result;
  } catch (e) {
    return e.message;
  }
};

const updateClient = async (id, data) => {
  try {
    const connection = await getConnection();
    const result = await connection.query(`UPDATE clients SET ? WHERE id = ?`, [
      data,
      id,
    ]);
    return result;
  } catch (e) {
    return e.message;
  }
};

const deleteClient = async (id) => {
  try {
    const connection = await getConnection();
    const result = await connection.query(
      `DELETE FROM clients WHERE id = ?`,
      id
    );
    return result;
  } catch (e) {
    return e.message;
  }
};

export const clientsServices = {
  getClients,
  getClient,
  addClient,
  updateClient,
  deleteClient,
};
