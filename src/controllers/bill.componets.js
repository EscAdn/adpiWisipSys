import moment from "moment";
import {services} from "./../services/bills";

const getBills = async (req, res) => {
	const resut = await services.getBills();
	res.json(resut);
}

const getBill = async (req, res) => {
	let {id} = req.params;

	const resut = await services.getBill(id);
	res.json(resut);	
}

// concept (String), payment_type_id (int), client_name (String)
// amount_incomes (decimal), amount_discharge (decimal)
const addBill = async (req, res) => {
	let data =req.body;
	data.created_at = moment().format("YYYY-MM-DD");
	data.updated_at = moment().format("YYYY-MM-DD");

	const resut = await services.addBill(data);
	res.json(resut);
}

// concept (String), payment_type_id (int), client_name (String)
// amount_incomes (decimal), amount_discharge (decimal)
const updateBill = async (req, res) => {
	let {id} = req.params;
	let data = req.body;
	data.updated_at = moment().format("YYYY-MM-DD");

	const resut = await services.updateBill(id, data);
	res.json(resut);
}

const deleteBill = async (req, res) => {
	let {id} = req.params;
	const resut = await services.deleteBill(id);
	res.json(resut);
}


export {
	getBills, 
	getBill, 
	addBill, 
	updateBill, 
	deleteBill
}

