import { getConnection } from "./../database/connection";

const error = (resp, error) => {
  resp.status(500);
  resp.send(error.message);
};

const getAddresses = async (req, resp) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT `id`, `address` as name, `created_at`, `uodated_at` FROM `addresses`");
    resp.json(result);
  } catch (e) {
    error(resp, e);
  }
};

const getAddress = async (req, resp) => {
  try {
    const { id } = req.params;

    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM `addresses` WHERE id = ?",
      id
    );
    resp.json(result);
  } catch (e) {
    error(resp, e);
  }
};

const addAddress = async (req, resp) => {
  try {
    const { address, created_at, updated_at } = req.body;

    // Comprobación de información
    if (
      address === undefined ||
      created_at === undefined ||
      updated_at === undefined
    ) {
      resp.status(400).json({
        message: "Error al procesar la información enviada :(...",
      });
    }

    const data = { address, created_at, updated_at };
    const connection = await getConnection();
    const result = await connection.query(
      "INSERT INTO `addresses` SET ?",
      data
    );
    resp.json(result);
  } catch (e) {
    error(resp, e);
  }
};

const updateAddress = async (req, resp) => {
  try {
    const { id } = req.params;
    const { address, updated_at } = req.body;

    if (address === undefined || updated_at === undefined) {
      resp.status(400).json({
        message: "Error al procesar la información enviada :(...",
      });
    }

    const data = { address, updated_at };
    const connection = await getConnection();
    const result = await connection.query(
      "UPDATE `addresses` SET ? WHERE id = ?",
      [data, id]
    );
    resp.json(result);
  } catch (e) {
    error(resp, e);
  }
};

const deleteAddress = async (req, resp) => {
  try {
    const { id } = req.params;

    const connection = await getConnection();
    const result = await connection.query("DELETE FROM `addresses` id = ?", id);
    resp.json(result);
  } catch (e) {
    error(resp, e);
  }
};

export const methods = {
  getAddresses,
  getAddress,
  addAddress,
  updateAddress,
  deleteAddress,
};
