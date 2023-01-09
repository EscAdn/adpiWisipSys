import { getConnection } from "./../database/connection";

const getPlans = async (req, resp) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM `plans`");
    resp.json(result);
  } catch (error) {
    resp.status(500);
    resp.send(error.message);
  }
};

const getPlan = async (req, resp) => {
  try {
    const { id } = req.params;

    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM `plans` WHERE id = ?",
      id
    );
    resp.json(result);
  } catch (error) {
    resp.status(500);
    resp.send(error.message);
  }
};

const addPlan = async (req, resp) => {
  try {
    const {
      name,
      ceil_down_mbps,
      ceil_up_mbps,
      price,
      contracts_count,
      created_at,
      updated_at,
    } = req.body;

    if (
      name === undefined ||
      ceil_down_mbps === undefined ||
      ceil_up_mbps === undefined ||
      price === undefined ||
      contracts_count === undefined ||
      created_at === undefined ||
      updated_at === undefined
    ) {
      resp.status(400).json({
        message: "Error al procesar la información enviada :(...",
      });
    }
    const data = {
      name,
      ceil_down_mbps,
      ceil_up_mbps,
      price,
      contracts_count,
      created_at,
      updated_at,
    };
    const connection = await getConnection();
    const result = await connection.query("INSERT INTO `plans` SET ?", data);
    resp.json(result);
  } catch (error) {
    resp.status(500);
    resp.send(error.message);
  }
};

const updatePlan = async (req, resp) => {
  try {
    const { id } = req.params;
    const {
      name,
      ceil_down_mbps,
      ceil_up_mbps,
      price,
      contracts_count,
      created_at,
      updated_at,
    } = req.body;

    if (
      name === undefined ||
      ceil_down_mbps === undefined ||
      ceil_up_mbps === undefined ||
      price === undefined ||
      contracts_count === undefined ||
      created_at === undefined ||
      updated_at === undefined
    ) {
      resp.status(400).json({
        message: "Error al procesar la información enviada :(...",
      });
    }
    const data = {
      name,
      ceil_down_mbps,
      ceil_up_mbps,
      price,
      contracts_count,
      created_at,
      updated_at,
    };
    const connection = await getConnection();
    const result = await connection.query("UPDATE `plans` SET ? WHERE id = ?", [
      data,
      id,
    ]);
    resp.json(result);
  } catch (error) {
    resp.status(500);
    resp.send(error.message);
  }
};

const deletePlan = async (req, resp) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE FROM `plans` WHERE id = ?",
      id
    );
    resp.json(result);
  } catch (error) {
    resp.status(500);
    resp.send(error.message);
  }
};

export const methods = {
  getPlans,
  getPlan,
  addPlan,
  updatePlan,
  deletePlan,
};
