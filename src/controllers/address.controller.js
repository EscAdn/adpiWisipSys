import moment from "moment/moment";
import { getConnection } from "./../database/connection";

const error = (resp, error) => {
  resp.send(error.message);
};

const getAddresses = async (req, resp) => {
  try {
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT `id`, `address` as name, `created_at`, `updated_at` FROM `addresses`"
    );
    resp.json(result);
  } catch (e) {
    error(resp, e);
  }
};

const getAddress = async (req, resp) => {
  try {
    const { id } = req.params;

    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM `addresses` WHERE id = ?",
      id
    );
    resp.json(result);
  } catch (e) {
    error(resp, e);
  }
};

const addAddress = async (req, resp) => {
  try {
    let date = req.body;
    data.created_at = moment().format("YYYY-MM-DD");
    data.updated_at = moment().format("YYYY-MM-DD");

    const connection = await getConnection();
    const result = await connection.query(
      "INSERT INTO `addresses` SET ?",
      data
    );
    resp.json(result);
  } catch (e) {
    error(resp, e);
  }
};

const updateAddress = async (req, resp) => {
  try {
    const { id } = req.params;
    let data = req.body;
    data.updated_at = moment().format("YYYY-MM-DD");

    const connection = await getConnection();
    const result = await connection.query(
      "UPDATE `addresses` SET ? WHERE id = ?",
      [data, id]
    );
    resp.json(result);
  } catch (e) {
    error(resp, e);
  }
};

export const methods = {
  getAddresses,
  getAddress,
  addAddress,
  updateAddress,
};
