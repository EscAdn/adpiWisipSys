import moment from "moment";
import { nodesServices } from "./../services/nodes";

const getNodes = async (req, resp) => {
  const result = await nodesServices.getNodes();
  resp.json(result);
};

const getNode = async (req, resp) => {
  const {id} = req.params;
  const result = await nodesServices.getNode(id);
  resp.json(result);
};

//address_id (Int), details (String), ports (Int)
const addNode = async (req, resp) => {
  let data = req.body;
  let hoy = moment().format("YYYY-MM-DD");

  data.created_at = hoy;
  data.updated_at = hoy;
  const result = await nodesServices.addNode(data);
  resp.json(result);
  
};

//address_id (Int), details (String), ports (Int)
const updateNode = async (req, resp) => {  
  const { id } = req.params;
  let data = req.body;
  data.updated_at = moment().format("YYYY-MM-DD");

  const result = await nodesServices.updateNode(id, data);
  resp.json(result);
};

export {
  getNodes,
  getNode,
  addNode,
  updateNode,
};
