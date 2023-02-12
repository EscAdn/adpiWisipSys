import moment from "moment/moment";
import { getConnection } from "./../database/connection";

const getContracts = async (req, resp) => {
  try {
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT c.*, cl.name as client, p.name as plan, p.price, a.address FROM `contracts` as c, `clients` as cl, `plans` as p, `addresses` as a WHERE cl.id = c.client_id AND p.id=c.plan_id AND a.id=cl.address_id ORDER BY c.id ASC;"
    );
    resp.json(result);
  } catch (error) {
    resp.send(error.message);
  }
};

const getContract = async (req, resp) => {
  try {
    const { id } = req.params;

    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM `contracts` WHERE id = ?",
      id
    );
    resp.json(result);
  } catch (error) {
    resp.send(error.message);
  }
};

const addContract = async (req, resp) => {
  try {
    let data = req.body;

    data.created_at = moment().format("YYYY-MM-DD");
    data.updated_at = moment().format("YYYY-MM-DD");

    const connection = await getConnection();
    const result = await connection.query(
      "INSERT INTO `contracts` SET ?",
      data
    );
    resp.json(result);
  } catch (error) {
    resp.send(error.message);
  }
};

const updateContract = async (req, resp) => {
  try {
    const { id } = req.params;
    let data = req.body;
    data.updated_at = moment().format("YYYY-MM-DD");

    const connection = await getConnection();
    const result = await connection.query(
      "UPDATE `contracts` SET ? WHERE id = ?",
      [data, id]
    );
    resp.json(result);
  } catch (error) {
    resp.send(error.message);
  }
};

const deleteContract = async (req, resp) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE FROM `contracts` WHERE id = ?",
      id
    );
    resp.json(result);
  } catch (error) {
    resp.send(error.message);
  }
};

export const methods = {
  getContracts,
  getContract,
  addContract,
  updateContract,
  deleteContract,
};
