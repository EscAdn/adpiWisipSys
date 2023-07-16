import moment from "moment";
import { plansServices } from "./../services/plans.js";
import { errorMessage } from "../helpers/errorHelper.js";

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
    const result = await plansServices.getPlan(id);
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
    const result = await plansServices.addPlan(data);
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
    const result = await plansServices.updatePlan(id, data);
    resp.json(result);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

export { getPlans, getPlan, addPlan, updatePlan };
