import moment from "moment";
import { addressesServices } from "./../services/address.js";
import { errorMessage } from "../helpers/errorHelper.js";

const getAddresses = async (req, res) => {
  try {
    const result = await addressesServices.getAddresses();
    res.json(result);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

const getAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await addressesServices.getAddress(id);
    res.json(result);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

const addAddress = async (req, res) => {
  try {
    req.body.address = req.body.name;
    delete req.body.name;
    let data = req.body;
    data.created_at = moment().format("YYYY-MM-DD");
    data.updated_at = moment().format("YYYY-MM-DD");
    const result = await addressesServices.addAddress(data);
    res.json(result);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

const updateAddress = async (req, res) => {
  try {
    const { id } = req.params;
    req.body.address = req.body.name;
    delete req.body.name;
    let data = req.body;
    data.updated_at = moment().format("YYYY-MM-DD");

    const result = await addressesServices.updateAddress(id, data);
    res.json(result);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

export { getAddresses, getAddress, addAddress, updateAddress };
