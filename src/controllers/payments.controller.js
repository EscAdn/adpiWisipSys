import moment from "moment";
import { errorMessage } from "../helpers/errorHelper.js";
import { paymentServices } from "./../services/payments.js";

const getPayments = async (req, res) => {
  try {
    const resut = await paymentServices.getPayments();
    res.json(resut);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

const getPayment = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await paymentServices.getPayment(id);
    res.json(result);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

const addPayment = async (req, res) => {
  try {
    let data = req.body;

    const findPromise = await paymentServices.getPayment(data.invoice);

    if (findPromise.length >= 1) {
      errorMessage(res, "PAYMENT_PROMISE_EXIST");
      return;
    }

    data.created_at = moment().format("YYYY-MM-DD");
    data.updated_at = data.created_at;

    const result = await paymentServices.addPayment(data);
    res.json(result);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

const updatePayment = async (req, res) => {
  try {
    const { id } = req.params;
    // { valid_until }
    let data = req.body;
    data.updated_at = moment().format("YYYY-MM-DD");

    const result = await paymentServices.updatePayment(id, data);
    res.json(result);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

const deletePayment = async (req, res) => {
  try {
    const { id } = req.params;

    const resut = await paymentServices.deletePayment(id);
    res.json(resut);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

export { getPayments, getPayment, addPayment, updatePayment, deletePayment };
