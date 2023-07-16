import moment from "moment";
import { invoicesServices } from "../services/invoices.js";
import { errorMessage } from "../helpers/errorHelper.js";

const getInvoices = async (req, res) => {
  try {
    const resp = await invoicesServices.getInvoices();
    res.json(resp);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

const getInvoice = async (req, res) => {
  try {
    const { id } = req.params;

    const resp = await invoicesServices.getInvoice(id);
    res.json(resp);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

// const getStateInvoice = async (req, resp) => {
//   try {
//     const { state } = req.body;
// const result = await invoicesServices.getStateInvoice(state);
//     resp.json(result)
//   } catch(e) {
//     errorMessage(res, e.errorMessage)
//   }
// }

// {contrac_id, from, to}
const addInvoice = async (req, res) => {
  try {
    let data = req.body;
    // Obtener el día de la fecha para buscar facturas que coincidan
    data.day = data.from.split("-")[2];
    data.mount = data.from.split("-")[1];
    data.year = data.from.split("-")[0];
    const result = await invoicesServices.addInvoice(data);
    res.json(result);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

// {state}  :id
const updateInvoice = async (req, res) => {
  try {
    const { id } = req.params;
    const { state } = req.body;

    let data = {
      state,
      updated_at: moment().format("YYYY-MM-DD"),
    };

    const result = await invoicesServices.updateInvoice(id, data);
    res.json(result);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

const deleteInvoice = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await invoicesServices.deleteInvoice(id);
    res.json(result);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

export { getInvoices, getInvoice, addInvoice, updateInvoice, deleteInvoice };
