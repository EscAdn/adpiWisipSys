import moment from "moment";
import { errorMessage } from "../helpers/errorHelper";
import { paymentServices } from "./../services/paymentPromises";

const getPaymentsPromises = async (req, res) => {
  try {
    const resut = await paymentServices.getPaymentsPromises();
    res.json(resut);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

const getPaymentPromise = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await paymentServices.getPaymentPromise(id);
    res.json(result);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

const addPaymentPromise = async (req, res) => {
  try {
    let data = req.body;
    data.created_at = moment().format("YYYY-MM-DD");
    data.updated_at = moment().format("YYYY-MM-DD");

    const result = await paymentServices.addPaymentPromise(data);
    res.json(result);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

const updatePaymentPromise = async (req, res) => {
  try {
    const { id } = req.params;
    // { valid_until }
    let data = req.body;
    data.updated_at = moment().format("YYYY-MM-DD");

    const result = await paymentServices.updatePaymentPromise(id, data);
    res.json(result);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

const deletePaymentPromise = async (req, res) => {
  try {
    const { id } = req.params;

    const resut = await paymentServices.deletePaymentPromise(id);
    res.json(resut);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

export {
  getPaymentsPromises,
  getPaymentPromise,
  addPaymentPromise,
  updatePaymentPromise,
  deletePaymentPromise,
};
