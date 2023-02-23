import moment from "moment/moment";
import { clientsServices } from "./../services/clients";

const getClients = async (req, resp) => {
    const result = await clientsServices.getClients();
    resp.json(result);
};

const getClient = async (req, resp) => {
    const { id } = req.params;
    const result = await clientsServices.getClient(id);
    resp.json(result);
};

// name (String), telephone (String), address_id (Int)
const addClient = async (req, resp) => {
    let data = req.body;
    data.created_at = moment().format("YYYY-MM-DD");
    data.updated_at = moment().format("YYYY-MM-DD");

    const result = await clientsServices.addClient(data);
    resp.json(result);
};

// name (String), telephone (String), address_id (Int)
const updateClient = async (req, resp) => {
    const { id } = req.params;
    let data = req.body;
    data.updated_at = moment().format("YYYY-MM-DD");

    const result = await clientsServices.updateClient(id, data);
    resp.json(result);
};

// id (Int)
const deleteClient = async (req, resp) => {
    const { id } = req.params;
    const result = await clientsServices.deleteClient(id);
    resp.json(result);
};

export const methods = {
  getClients,
  getClient,
  addClient,
  updateClient,
  deleteClient,
};
