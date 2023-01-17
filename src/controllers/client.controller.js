import { getConnection } from "./../database/connection";

const getClients = async (req, resp) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT c.*, a.address FROM `clients` as c, `addresses` as a WHERE a.id = c.address_id ORDER BY c.id");
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
    const { name, telephone, address_id, created_at, updated_at } = req.body;

    if (
      name === undefined ||
      telephone === undefined ||
      address_id === undefined ||
      created_at === undefined ||
      updated_at === undefined
    ) {
      resp.json({
        message: "Error al procesar la información enviada :(...",
      });
    }

    const data = { name, telephone, address_id, created_at, updated_at };
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
    const { name, telephone, address_id, updated_at } = req.body;

    if (
      name === undefined ||
      telephone === undefined ||
      address_id === undefined ||
      updated_at === undefined
    ) {
      resp.json({
        message: "Error al procesar la información enviada :(...",
      });
    }

    const data = { name, telephone, address_id, updated_at };
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
