import { getConnection } from "./../database/connection";
import moment from "moment";

const getNodes = async (req, resp) => {
  try {
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT a.address, n.* FROM `nodes` as n, `addresses` as a WHERE a.id = n.address_id;"
    );
    resp.json(result);
  } catch (e) {
    resp.send(e.message);
  }
};

const getNode = async (req, resp) => {
  try {
    const { id } = req.params;

    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM `nodes` WHERE id = ?",
      id
    );
    resp.json(result);
  } catch (e) {
    resp.send(e.message);
  }
};

const addNode = async (req, resp) => {
  // Recibe address_id, details, ports
  try {
    let data = req.body;
    let hoy = moment().format("YYYY-MM-DD");

    data.created_at = hoy;
    data.updated_at = hoy;

    const connection = await getConnection();
    const result = await connection.query("INSERT INTO `nodes` SET ?", data);
    resp.json(result);
  } catch (e) {
    resp.send(e.message);
  }
};

const updateNode = async (req, resp) => {
  // Recibe address_id, details, ports
  try {
    const { id } = req.params;
    let data = req.body;
    data.updated_at = moment().format("YYYY-MM-DD");

    const connection = await getConnection();
    const result = await connection.query("UPDATE `nodes` SET ? WHERE id = ?", [
      data,
      id,
    ]);
    resp.json(result);
  } catch (e) {
    resp.send(e.message);
  }
};

export const methods = {
  getNodes,
  getNode,
  addNode,
  updateNode,
};
