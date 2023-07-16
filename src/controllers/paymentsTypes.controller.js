import moment from "moment";
import { paymentsTypesServices } from "./../services/paymentsTypes.js";
import { errorMessage } from "../helpers/errorHelper.js";

const getPaymentsTypes = async (req, res) => {
  try {
    const result = await paymentsTypesServices.getPaymentsTypes();
    res.json(result);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

const getPaymentType = async (req, res) => {
  try {
    let { id } = req.params;

    const result = await paymentsTypesServices.getPaymentType(id);
    res.json(result);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

// type (String)
const addPaymentType = async (req, res) => {
  try {
    let data = req.body;
    data.created_at = moment().format("YYYY-MM-DD");
    data.updated_at = moment().format("YYYY-MM-DD");

    const result = await paymentsTypesServices.addPaymentType(data);
    res.json(result);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

// type (String), id
const updategetPaymentType = async (req, res) => {
  try {
    let { id } = req.params;
    let data = req.body;
    data.updated_at = moment().format("YYYY-MM-DD");

    const result = await paymentsTypesServices.updategetPaymentType(id, data);
    res.json(result);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

export {
  getPaymentsTypes,
  getPaymentType,
  addPaymentType,
  updategetPaymentType,
};
