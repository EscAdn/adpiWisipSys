import moment from "moment";
import {paymentsTypesServices} from "./../services/paymentsTypes";

const getPaymentsTypes = async (req, res) => {
	const result = await paymentsTypesServices.getPaymentsTypes();
	res.json(result);
}

const getPaymentType = async (req, res) => {
	let {id} = req.params;

	const result = await paymentsTypesServices.getPaymentType(id);
	res.json(result);	
}

// type (String)
const addPaymentType = async (req, res) => {
	let data = req.body;
	data.created_at = moment().format("YYYY-MM-DD");
	data.updated_at = moment().format("YYYY-MM-DD");

	const result = await paymentsTypesServices.addPaymentType(data);
	res.json(result);
}

// type (String), id
const updategetPaymentType = async (req, res) => {
	let {id} = req.params;
	let data = req.body;
	data.updated_at = moment().format("YYYY-MM-DD");

	const result = await paymentsTypesServices.updategetPaymentType(id, data);
	res.json(result);
}

export const methods = {
	getPaymentsTypes, 
	getPaymentType, 
	addPaymentType, 
	updategetPaymentType
}