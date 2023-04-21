import moment from "moment/moment";
import { clientsServices } from "./../services/clients";
import { errorMessage } from "../helpers/errorHelper";

const getClients = async (req, resp) => {
  try {
    const result = await clientsServices.getClients();
    resp.json(result);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

const getClient = async (req, resp) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM `clients` WHERE id = ?",
      id
    );
    resp.json(result);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

const addClient = async (req, resp) => {
  try {
    let data = req.body;
    data.created_at = moment().format("YYYY-MM-DD");
    data.updated_at = moment().format("YYYY-MM-DD");

    const connection = await getConnection();
    const result = await connection.query("INSERT INTO `clients` SET ?", data);
    resp.json(result);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

const updateClient = async (req, resp) => {
  try {
    const { id } = req.params;
    let data = req.body;
    data.updated_at = moment().format("YYYY-MM-DD");
    const connection = await getConnection();
    const result = await connection.query(
      "UPDATE `clients` SET ? WHERE id = ?",
      [data, id]
    );
    resp.json(result);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

const deleteClient = async (req, resp) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE FROM clients WHERE id = ?",
      id
    );
    resp.json(result);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

export { getClients, getClient, addClient, updateClient, deleteClient };
