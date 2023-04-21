import {getConnection} from "./../database/connection";

const getBills = async () => {
	try {
		const conn = await getConnection();
		const resut = await conn.query(
			`SELECT b.id, b.concept, b.payment_type_id, pt.type as pt_name, 
			b.client_name, b.amount_incomes, b.amount_discharge, 
			b.created_at, b.updated_at FROM bills as b, payment_types as pt 
			WHERE pt.id = b.payment_type_id;`
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
			`SELECT b.id, b.concept, b.payment_type_id, pt.type as pt_name, 
			b.client_name, b.amount_incomes, b.amount_discharge, 
			b.created_at, b.updated_at FROM bills as b, payments_types as pt 
			WHERE pt.id = b.payment_type_id AND b.id = ?;`,
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


export const services = {
	getBills, 
	getBill, 
	addBill, 
	updateBill, 
	deleteBill
}

