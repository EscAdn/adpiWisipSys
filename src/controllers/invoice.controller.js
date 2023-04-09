import moment from "moment/moment";
import { invoicesServices } from "../services/invoices";

const getInvoices = async (req, res) => {
  const resp = await invoicesServices.getInvoices();
  res.json(resp);
};

const getInvoice = async (req, res) => {
  const { id } = req.params;

  const resp = await invoicesServices.getInvoice(id);
  res.json(resp);
};

const addInvoice = async (req, res) => {
    //{ contract_id = id del contrato
    // from = fecha en que se genera la factura
    let data = req.body;
    // Obtener el día de la fecha para buscar facturas que coincidan
    data.date = moment(data.from, "YYYY-MM-DD").date();

    const result = await invoicesServices.addInvoice(data);
    res.json(result);
};

const updateInvoice = async (req, res) => {
  const {id} = req.params;

  let data = {
    updated_at: moment().format("YYYY-MM-DD"),
    state: "Pagada",
  };

  const result = await invoicesServices.updateInvoice(id, data);
  res.json(result);
};

const deleteInvoice = async (req, res) => {
    const { id } = req.params;
    
    const result = await invoicesServices.deleteInvoice(id);
    res.json(result);
};

export {
  getInvoices,
  getInvoice,
  addInvoice,
  updateInvoice,
  deleteInvoice,
};
