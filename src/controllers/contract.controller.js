import moment from "moment";
import { contractsServices } from "../services/contracts.js";
import { errorMessage } from "../helpers/errorHelper.js";

const getContracts = async (req, resp) => {
  try {
    const result = await contractsServices.getContracts();
    resp.json(result);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

const getContract = async (req, resp) => {
  try {
    const { id } = req.params;
    const result = await contractsServices.getContract(id);
    resp.json(result);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

const addContract = async (req, resp) => {
  try {
    let data = req.body;
    data.created_at = moment().format("YYYY-MM-DD");
    data.updated_at = moment().format("YYYY-MM-DD");

    const result = await contractsServices.addContract(data);
    resp.json(result);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

const updateContract = async (req, resp) => {
  try {
    const { id } = req.params;
    let data = req.body;
    data.updated_at = moment().format("YYYY-MM-DD");

    const result = await contractsServices.updateContract(id, data);
    resp.json(result);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

const deleteContract = async (req, resp) => {
  try {
    const { id } = req.params;

    const result = await contractsServices.deleteContract(id);
    resp.json(result);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

export {
  getContracts,
  getContract,
  addContract,
  updateContract,
  deleteContract,
};
