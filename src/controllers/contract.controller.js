import moment from "moment/moment";
import { getConnection } from "./../database/connection";
import { contractsServices } from "../services/contracts";

const getContracts = async (req, resp) => {
  const result = await contractsServices.getContracts();
  resp.json(result);
};

const getContract = async (req, resp) => {
  const { id } = req.params;
  const result = await contractsServices.getContract(id);
  resp.json(result);
};

const addContract = async (req, resp) => {
  let data = req.body;
  data.created_at = moment().format("YYYY-MM-DD");
  data.updated_at = moment().format("YYYY-MM-DD");

  const result = await contractsServices.addContract(data);
  resp.json(result);
};

const updateContract = async (req, resp) => {
  const { id } = req.params;
  let data = req.body;
  data.updated_at = moment().format("YYYY-MM-DD");

  const result = await contractsServices.updateContract(id, data);
  resp.json(result);
};

const deleteContract = async (req, resp) => {
  const { id } = req.params;

  const result = await contractsServices.deleteContract(id);
  resp.json(result);
};

export {
  getContracts,
  getContract,
  addContract,
  updateContract,
  deleteContract,
};
