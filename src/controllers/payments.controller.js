import { getConnection } from "./../database/connection";

const getPaymentsPromises = async (req, res) => {
  try {
    const conn = await getConnection();
    const resut = await conn.query("SELECT * FROM payment_promises;");
    res.json(resut);
  } catch (error) {
    res.json({ err: error.message });
  }
};

const getPaymentPromise = async (req, res) => {
  try {
    const { id } = req.params;

    const conn = await getConnection();
    const result = await conn.query(
      "SELECT * FROM payment_promises WHERE id = ?;",
      id
    );
    res.json(result);
  } catch (error) {
    res.json({ err: error.message });
  }
};

const addPaymentPromise = async (req, res) => {
  try {
    const { valid_until, contract_id, created_at, updated_at } = req.body;

    if (
      valid_until === undefined ||
      contract_id === undefined ||
      created_at === undefined ||
      updated_at === undefined
    ) {
      resp.json({
        message: "Error al procesar la información enviada :(...",
      });
    }

    const data = { valid_until, contract_id, created_at, updated_at };
    const conn = await getConnection();
    const result = await conn.query(
      "INSERT INTO `payment_promises` SET ? ",
      data
    );
    res.json(result);
  } catch (error) {
    res.json({ err: error.message });
  }
};

const updatePaymentPromise = async (req, res) => {
  try {
    const { id } = req.params;
    const { valid_until } = req.body;

    if (valid_until === undefined) {
      resp.json({
        message: "Error al procesar la información enviada :(...",
      });
    }

    const data = { valid_until };
    const conn = await getConnection();
    const result = await conn.query(
      "UPDATE `payment_promises` SET ? WHERE id = ?",
      [data, id]
    );
    res.json(result);
  } catch (error) {
    res.json({ err: error.message });
  }
};

const deletePaymentPromise = async (req, res) => {
  try {
    const { id } = req.params;

    const conn = await getConnection();
    const resut = await conn.query(
      "DELETE * FROM  payment_promises WHERE id = ?",
      id
    );
    res.json(resut);
  } catch (error) {
    res.json({ err: error.message });
  }
};

export const methods = {
  getPaymentsPromises,
  getPaymentPromise,
  addPaymentPromise,
  updatePaymentPromise,
  deletePaymentPromise,
};
