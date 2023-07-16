import moment from "moment";
import { buillsServices } from "./../services/bills.js";
import { invoicesServices } from "./../services/invoices.js";
import { errorMessage } from "../helpers/errorHelper.js";

const getBills = async (req, res) => {
  try {
    const resut = await buillsServices.getBills();
    res.json(resut);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

const getBill = async (req, res) => {
  try {
    let { id } = req.params;

    const resut = await buillsServices.getBill(id);
    res.json(resut);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

// concept (String), payment_type_id (int), client_name (String)
// amount_incomes (decimal), amount_discharge (decimal)
const addBill = async (req, res) => {
  try {
    let data = req.body;
    data.created_at = moment().format("YYYY-MM-DD");
    data.updated_at = moment().format("YYYY-MM-DD");

    if (data.invoice) {
      const invoiceState = await invoicesServices.getInvoiceState(data.invoice);

      if (invoiceState[0].state === "Pagada") {
        errorMessage(res, "INVOICE_NOT_ACTIVE");
        return;
      } else {
        const invoiceData = {
          state: "Pagada",
          updated_at: data.updated_at,
        };

        const updateStateInvoice = await invoicesServices.updateInvoice(
          data.invoice,
          invoiceData
        );

        if (updateStateInvoice.err) {
          errorMessage(res, "ERR_STATE_INVOICE");
        }
      }
    }

    const resut = await buillsServices.addBill(data);
    res.json(resut);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

// concept (String), payment_type_id (int), client_name (String)
// amount_incomes (decimal), amount_discharge (decimal)
const updateBill = async (req, res) => {
  try {
    let { id } = req.params;
    let data = req.body;
    data.updated_at = moment().format("YYYY-MM-DD");

    const resut = await buillsServices.updateBill(id, data);
    res.json(resut);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

const deleteBill = async (req, res) => {
  try {
    let { id } = req.params;
    const resut = await buillsServices.deleteBill(id);
    res.json(resut);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

export { getBills, getBill, addBill, updateBill, deleteBill };
