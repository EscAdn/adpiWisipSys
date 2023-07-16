import { getConnection } from "./../database/connection";

const getNodes = async () => {
	try {
		const connection = await getConnection();
		const result = await connection.query(
			`SELECT a.address, n.* 
			FROM nodes as n, addresses as a 
			WHERE a.id = n.address_id;`
			);
		return result;
	} catch (e) {
		return e.message;
	}
}

const getNode = async (id) => {
	try {
		const conn = await getConnection();
		const result = await conn.query(
			`SELECT a.address, 
				n.* FROM nodes as n, 
				addresses as a 
				WHERE 
				a.id = n.address_id 
				AND n.id = ?`
			, id
			);
		return result;
	} catch(e) {
		return e.message;
	}
}

const addNode = async (data) => {
	try {
		const connection = await getConnection();
		const result = await connection.query(
			`INSERT INTO nodes SET ?`, 
			data
			);
		return result;
	} catch (e) {
		return e.message;
	}
}

const updateNode = async (id, data) => {
	try {

		const connection = await getConnection();
		const result = await connection.query(
			`UPDATE nodes SET ? WHERE id = ?`, 
			[data,id,]
			);
		return result;
	} catch (e) {
		return e.message;
	}
}

export const nodesServices = {
	getNodes,
	getNode,
	addNode,
	updateNode,
}