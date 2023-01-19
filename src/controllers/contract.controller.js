import { getConnection } from "./../database/connection";

const getContracts = async (req, resp) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT c.*, cl.name as client, p.name as plan, p.price, a.address FROM `contracts` as c, `clients` as cl, `plans` as p, `addresses` as a WHERE cl.id = c.client_id AND p.id=c.plan_id AND a.id=cl.address_id ORDER BY c.id ASC;");
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
    const {
      client_id,
      plan_id,
      server_id,
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
      ip === undefined ||
      netmask === undefined ||
      mac_address === undefined ||
      details === undefined ||
      created_at === undefined ||
      updated_at === undefined
    ) {
      resp.json({
        message: "Error al procesar la información enviada :(...",
      });
    }

    const data = {
      client_id,
      plan_id,
      server_id,
      ip,
      netmask,
      mac_address,
      details,
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
      updated_at === undefined
    ) {
      resp.json({
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
      updated_at,
    };
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
