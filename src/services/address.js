import {getConnection} from "./../database/connection";

const getAddresses = async () => {
	try {
		const conn = await getConnection();
		const result = await conn.query(
			`SELECT 
			id, address as name, 
			created_at, updated_at 
			FROM addresses`
			);
		return result;
	} catch(e) {
		return e.message;
	}
}

const getAddress = async (id) => {
	try {
		const conn = await getConnection();
		const result = await conn.query(
			`SELECT * 
			FROM addresses 
			WHERE id = ?`
			, id);
		return result;
	} catch(e) {
		return e.message;
	}
}

const addAddress = async (data) => {
  try {
    const conn = await getConnection();
    const result = await conn.query(
      `INSERT INTO addresses SET ?`,
      data
    );
    return result;
  } catch (e) {
    return e.message;
  }
};

const updateAddress = async (id, data) => {
  try {
    const conn = await getConnection();
    const result = await conn.query(
      `UPDATE addresses SET ? WHERE id = ?`,
      [data, id]
    );
    return result;
  } catch (e) {
    return e.message;
  }
};

export const addressesServices = {
	getAddresses,
	getAddress,
	addAddress,
	updateAddress
}