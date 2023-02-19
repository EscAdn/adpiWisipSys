import { paymentServices } from "./../database/connection";

const getPaymentsPromises = async (req, res) => {
  const resut = await paymentServices.getPaymentsPromises();
  res.json(resut);
};

const getPaymentPromise = async (req, res) => {
  const { id } = req.params;

  const result = await paymentServices.getPaymentPromise(id);
  res.json(result);
};

const addPaymentPromise = async (req, res) => {
    let data = req.body;

    const result = await paymentServices.addPaymentPromise(data)
    res.json(result);
};

const updatePaymentPromise = async (req, res) => {

  const { id } = req.params;
    // { valid_until } 
  let data = req.body;

  const result = await paymentServices.updatePaymentPromise(id, data);
  res.json(result);
  
};

const deletePaymentPromise = async (req, res) => {
  const { id } = req.params;

  const resut = await paymentServices.deletePaymentPromise(id);
  res.json(resut);
};

export const methods = {
  getPaymentsPromises,
  getPaymentPromise,
  addPaymentPromise,
  updatePaymentPromise,
  deletePaymentPromise,
};
