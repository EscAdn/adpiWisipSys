import moment from "moment";
import {billsServices} from "./../services/bills";

const getBills = async (req, res) => {
	const resut = await billsServices.getBills();
	res.json(resut);
}

const getBill = async (req, res) => {
	let {id} = req.params;

	const resut = await billsServices.getBill(id);
	res.json(resut);	
}

// concept (String), payment_type_id (int), client_name (String)
// amount_incomes (decimal), amount_discharge (decimal)
const addBill = async (req, res) => {
	let data =req.body;
	data.created_at = moment().format("YYYY-MM-DD");
	data.updated_at = moment().format("YYYY-MM-DD");

	const resut = await billsServices.addBill(data);
	res.json(resut);
}

// concept (String), payment_type_id (int), client_name (String)
// amount_incomes (decimal), amount_discharge (decimal)
const updateBill = async (id, data) => {
	let {id} = req.params;
	let data = req.body;
	data.updated_at = moment().format("YYYY-MM-DD");

	const resut = await billsServices.updategetBill(id, data);
	res.json(resut);
}

const deleteBill = async (id) => {
	let {id} = req.params;
	const resut = await billsServices.deleteBill(id);
	res.json(resut);
}


export const methods = {
	getBills, 
	getBill, 
	addBill, 
	updateBill, 
	deleteBill
}

