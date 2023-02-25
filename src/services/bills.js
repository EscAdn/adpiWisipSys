import {getConnection} from "./../database/connection";

const getBills = async () => {
	try {
		const conn = await getConnection();
		const resut = await conn.query(
			`SELECT id, concept, payment_type_id, 
			client_name, amount_incomes, amount_discharge, 
			created_at, updated_at FROM bills;`
			);
		return resut;
	} catch (error) {
		return error.message;
	}
}

const getBill = async (id) => {
	try {
		const conn = await getConnection();
		const resut = await conn.query(
			`SELECT id, concept, payment_type_id, 
			client_name, amount_incomes, amount_discharge, 
			created_at, updated_at FROM bills WHERE id = ?;`,
			id
			);
		return resut;
	} catch (error) {
		return error.message;
	}
}

const addBill = async (data) => {
	try {
		const conn = await getConnection();
		const resut = await conn.query(
			`INSERT INTO bills SET ?;`,
			data
			);
		return resut;
	} catch (error) {
		return error.message;
	}
}

const updateBill = async (id, data) => {
	try {
		const conn = await getConnection();
		const resut = await conn.query(
			`UPDATE bills SET ? WHERE id = ?;`,
			[data, id]
			);
		return resut;
	} catch (error) {
		return error.message;
	}
}

const deleteBill = async (id) => {
	try {
		const conn = await getConnection();
		const resut = await conn.query(
			`DELETE FROM bills WHERE id = ?;`,
			id
			);
		return resut;
	} catch (error) {
		return error.message;
	}
}


export const billsServices = {
	getBills, 
	getBill, 
	addBill, 
	updateBill, 
	deleteBill
}

