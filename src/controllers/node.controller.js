import moment from "moment";
import { nodesServices } from "./../services/nodes.js";
import { errorMessage } from "../helpers/errorHelper.js";

const getNodes = async (req, res) => {
  try {
    const result = await nodesServices.getNodes();
    res.json(result);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

const getNode = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await nodesServices.getNode(id);
    res.json(result);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

//address_id (Int), details (String), ports (Int)
const addNode = async (req, res) => {
  try {
    let data = req.body;
    let hoy = moment().format("YYYY-MM-DD");

    data.created_at = hoy;
    data.updated_at = hoy;
    const result = await nodesServices.addNode(data);
    res.json(result);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

//address_id (Int), details (String), ports (Int)
const updateNode = async (req, res) => {
  try {
    const { id } = req.params;
    let data = req.body;
    data.updated_at = moment().format("YYYY-MM-DD");

    const result = await nodesServices.updateNode(id, data);
    res.json(result);
  } catch (e) {
    errorMessage(res, e.errorMessage);
  }
};

export { getNodes, getNode, addNode, updateNode };
