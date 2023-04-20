import moment from "moment/moment";
import {addressesServices} from './../services/address';

const getAddresses = async (req, resp) => {
  const result = await addressesServices.getAddresses();
  resp.json(result);
};

const getAddress = async (req, resp) => {
  const { id } = req.params;

  const result = await addressesServices.getAddress(id);
  resp.json(result);
};

// address (String)
const addAddress = async (req, resp) => {
  let data = req.body;
  data.created_at = moment().format("YYYY-MM-DD");
  data.updated_at = moment().format("YYYY-MM-DD");

  const result = await addressesServices.addAddress(data);
};

const updateAddress = async (req, resp) => {
  const { id } = req.params;
  let data = req.body;
  data.updated_at = moment().format("YYYY-MM-DD");

  const result = await addressesServices.updateAddress(id, data)
  return result;
};

export {
  getAddresses,
  getAddress,
  addAddress,
  updateAddress,
};
