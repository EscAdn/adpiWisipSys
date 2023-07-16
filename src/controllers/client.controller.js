import moment from "moment/moment";
import { clientsServices } from "./../services/clients";
import { errorMessage } from "../helpers/errorHelper";

const getClients = async (req, resp) => {
  try {
    const result = await clientsServices.getClients();
    resp.json(result);
  } catch (e) {
    errorMessage(resp, e.errorMessage);
  }
};

const getClient = async (req, resp) => {
  try {
    const { id } = req.params;
    const result = await clientsServices.getClient(id);
    resp.json(result);
  } catch (e) {
    errorMessage(resp, e.errorMessage);
  }
};

const addClient = async (req, resp) => {
  try {
    let data = req.body;
    data.created_at = moment().format("YYYY-MM-DD");
    data.updated_at = moment().format("YYYY-MM-DD");
    const result = await clientsServices.addClient(data);
    resp.json(result);
  } catch (e) {
    errorMessage(resp, e.errorMessage);
  }
};

const updateClient = async (req, resp) => {
  try {
    const { id } = req.params;
    let data = req.body;
    data.updated_at = moment().format("YYYY-MM-DD");
    const result = await clientsServices.updateClient(id, data);
    resp.json(result);
  } catch (e) {
    errorMessage(resp, e.errorMessage);
  }
};

const deleteClient = async (req, resp) => {
  try {
    const { id } = req.params;
    const result = await clientsServices.deleteClient(id)
    resp.json(result);
  } catch (e) {
    errorMessage(resp, e.errorMessage);
  }
};

export { getClients, getClient, addClient, updateClient, deleteClient };
