import moment from "moment/moment";
import { plansServices } from "./../services/plans";

const getPlans = async (req, resp) => {
    const result = await plansServices.getPlans();
    resp.json(result);
};

const getPlan = async (req, resp) => {
    const { id } = req.params;

    const result = await plansServices.getPlan(id);
    resp.json(result);
};

const addPlan = async (req, resp) => {
    //   name, ceil_down_mbps, ceil_up_mbps, price
    let data = req.body;
    data.created_at = moment().format("YYYY-MM-DD");
    data.updated_at = moment().format("YYYY-MM-DD");

    const result = await plansServices.addPlan(data);
    resp.json(result);
};

const updatePlan = async (req, resp) => {
    const { id } = req.params;
    let data = req.body;
    data.updated_at = moment().format("YYYY-MM-DD");

    const result = await paymentServices.updatePlan(id, data);
    resp.json(result);
};

export {
  getPlans,
  getPlan,
  addPlan,
  updatePlan
};
