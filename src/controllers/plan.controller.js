import moment from "moment/moment";
import { getConnection } from "./../database/connection";

const getPlans = async (req, resp) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM `plans`");
    resp.json(result);
  } catch (error) {
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
    resp.send(error.message);
  }
};

const addPlan = async (req, resp) => {
  try {
    //   name, ceil_down_mbps, ceil_up_mbps, price
    let data = req.body;
    data.created_at = moment().format("YYYY-MM-DD");
    data.updated_at = moment().format("YYYY-MM-DD");

    const connection = await getConnection();
    const result = await connection.query("INSERT INTO `plans` SET ?", data);
    resp.json(result);
  } catch (error) {
    resp.send(error.message);
  }
};

const updatePlan = async (req, resp) => {
  try {
    const { id } = req.params;
    let data = req.body;
    data.updated_at = moment().format("YYYY-MM-DD");

    const connection = await getConnection();
    const result = await connection.query("UPDATE `plans` SET ? WHERE id = ?", [
      data,
      id,
    ]);
    resp.json(result);
  } catch (error) {
    resp.send(error.message);
  }
};

export {
  getPlans,
  getPlan,
  addPlan,
  updatePlan,
  // deletePlan,
};
