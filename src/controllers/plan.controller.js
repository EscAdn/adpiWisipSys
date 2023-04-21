import moment from "moment/moment";
import { plansServices } from "./../services/plans";
import { errorMessage } from "../helpers/errorHelper";

const getPlans = async (req, resp) => {
  try {
    const result = await plansServices.getPlans();
    resp.json(result);
  } catch (e) {
    errorMessage(res, e.errorMessage);
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
  } catch (e) {
    errorMessage(res, e.errorMessage);
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
  } catch (e) {
    errorMessage(res, e.errorMessage);
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
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

export { getPlans, getPlan, addPlan, updatePlan };
