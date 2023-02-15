import {getConnection} from "./../database/connection";

// Obtiene los contratos que facturan en la fecha indicada
// y no cuentan con factura generada del mes
const getContractsOfDate = async (day, now, contract_id = 0) => {
	try {
		const conn = await getConnection();
		let result = [];
		if(contract_id === 0){
			result = await conn.query(
				`SELECT c.id FROM contracts c WHERE 
				c.day_cut= ${day} 
				AND NOT EXISTS 
				(SELECT id FROM invoices 
				WHERE invoices.from = '${now}' 
				AND invoices.contract_id=c.id);`
				);
		}else {
			result = await conn.query(
				`SELECT c.* FROM contracts c 
				WHERE c.day_cut= ${day} 
				AND c.id = ${contract_id} 
				AND NOT EXISTS 
				(SELECT id FROM invoices WHERE 
				invoices.from = '${now}' 
				AND invoices.contract_id=c.id);`
				);
		}
		return result;
	} catch(e) {
		return e.message;
	}
}

const getContracts = async () => {

}

const getContract = async (id) => {

}

const addContract = async (data) => {

}

const updateContract = async (id, data) => {

}

const deleteContract = async (id) => {

}

export const contractsServices = {
	getContracts,
	getContract,
	addContract,
	updateContract,
	deleteContract,
	getContractsOfDate
}