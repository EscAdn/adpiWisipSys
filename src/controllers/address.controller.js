import moment from "moment/moment";
import { addressesServices } from "./../services/address";
import { errorMessage } from "../helpers/errorHelper";

const getAddresses = async (req, resp) => {
  try {
    const result = await addressesServices.getAddresses();
    resp.json(result);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

const getAddress = async (req, resp) => {
  try {
    const { id } = req.params;

    const result = await addressesServices.getAddress(id);
    resp.json(result);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

// address (String)
const addAddress = async (req, resp) => {
  try {
    let data = req.body;
    data.created_at = moment().format("YYYY-MM-DD");
    data.updated_at = moment().format("YYYY-MM-DD");

    const result = await addressesServices.addAddress(data);
    resp.json(result);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

const updateAddress = async (req, resp) => {
  try {
    const { id } = req.params;
    let data = req.body;
    data.updated_at = moment().format("YYYY-MM-DD");

    const result = await addressesServices.updateAddress(id, data);
    resp.json(result);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

export { getAddresses, getAddress, addAddress, updateAddress };
