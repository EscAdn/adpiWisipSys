import { getConnection } from "./../database/connection";

const getContracts = async (req, resp) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM `contracts`");
    resp.json(result);
  } catch (error) {
    resp.status(500);
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
    resp.status(500);
    resp.send(error.message);
  }
};

const addContract = async (req, resp) => {
  try {
    const {
      client_id,
      plan_id,
      server_id,
      state,
      ip,
      netmask,
      mac_address,
      details,
      node_id,
      created_at,
      updated_at,
    } = req.body;
    if (
      client_id === undefined ||
      plan_id === undefined ||
      server_id === undefined ||
      state === undefined ||
      ip === undefined ||
      netmask === undefined ||
      mac_address === undefined ||
      details === undefined ||
      node_id === undefined ||
      created_at === undefined ||
      updated_at === undefined
    ) {
      resp.status(400).json({
        message: "Error al procesar la información enviada :(...",
      });
    }

    const data = {
      client_id,
      plan_id,
      server_id,
      state,
      ip,
      netmask,
      mac_address,
      details,
      node_id,
      created_at,
      updated_at,
    };
    const connection = await getConnection();
    const result = await connection.query(
      "INSERT INTO `contracts` SET ?",
      data
    );
    resp.json(result);
  } catch (error) {
    resp.status(500);
    resp.send(error.message);
  }
};

const updateContract = async (req, resp) => {
  try {
    const { id } = req.params;
    const {
      client_id,
      plan_id,
      server_id,
      state,
      ip,
      netmask,
      mac_address,
      details,
      node_id,
      created_at,
      updated_at,
    } = req.body;
    if (
      client_id === undefined ||
      plan_id === undefined ||
      server_id === undefined ||
      state === undefined ||
      ip === undefined ||
      netmask === undefined ||
      mac_address === undefined ||
      details === undefined ||
      node_id === undefined ||
      created_at === undefined ||
      updated_at === undefined
    ) {
      resp.status(400).json({
        message: "Error al procesar la información enviada :(...",
      });
    }

    const data = {
      client_id,
      plan_id,
      server_id,
      state,
      ip,
      netmask,
      mac_address,
      details,
      node_id,
      created_at,
      updated_at,
    };
    const connection = await getConnection();
    const result = await connection.query(
      "INSERT INTO `contracts` SET ? WHERE id = ?",
      [data, id]
    );
    resp.json(result);
  } catch (error) {
    resp.status(500);
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
    resp.state(500);
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
