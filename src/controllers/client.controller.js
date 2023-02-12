import moment from "moment/moment";
import { getConnection } from "./../database/connection";

const getClients = async (req, resp) => {
  try {
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT c.*, a.address FROM `clients` as c, `addresses` as a WHERE a.id = c.address_id ORDER BY c.id"
    );
    resp.json(result);
  } catch (e) {
    resp.send(e.message);
  }
};

const getClient = async (req, resp) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM `clients` WHERE id = ?",
      id
    );
    resp.json(result);
  } catch (e) {
    resp.send(e.message);
  }
};

const addClient = async (req, resp) => {
  try {
    let data = req.body;
    data.created_at = moment().format("YYYY-MM-DD");
    data.updated_at = moment().format("YYYY-MM-DD");

    const connection = await getConnection();
    const result = await connection.query("INSERT INTO `clients` SET ?", data);
    resp.json(result);
  } catch (e) {
    resp.send(e.message);
  }
};

const updateClient = async (req, resp) => {
  try {
    const { id } = req.params;
    let data = req.body;
    data.updated_at = moment().format("YYYY-MM-DD");
    const connection = await getConnection();
    const result = await connection.query(
      "UPDATE `clients` SET ? WHERE id = ?",
      [data, id]
    );
    resp.json(result);
  } catch (e) {
    resp.send(e.message);
  }
};

const deleteClient = async (req, resp) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE FROM `clients` WHERE id = ?",
      id
    );
    resp.json(result);
  } catch (e) {
    resp.send(e.message);
  }
};

export const methods = {
  getClients,
  getClient,
  addClient,
  updateClient,
  deleteClient,
};
