import {getConnection} from './../database/connection'

const getPayments = async () => {
	try {
		const conn = await getConnection()
		const result = await conn.query(``)
		return result
	} catch(e) {
		return e.message
	}
}

const getPayment = async (id) => {
	try {
		const conn = await getConnection()
		const result = await conn.query(``, id)
		return result
	} catch(e) {
		return e.message
	}
}

const addPayment = async (data) => {
	try {
		const conn = await getConnection()
		const result = await conn.query(``, data)
		return result
	} catch(e) {
		return e.message
	}
}

const updatePayment = async (id, data) => {
	try {
		const conn = await getConnection()
		const result = await conn.query(``, [data, id])
		return result
	} catch(e) {
		return e.message
	}
}

const deletePayment = async (id) => {
	try {
		const conn = await getConnection()
		const result = await conn.query(``, id)
		return result
	} catch(e) {
		return e.message
	}
}

export const paymentServices = {
	getPayments,
	getPayment,
	addPayment,
	updatedPaymen,
	deletePayment
}