import {getConnection} from "../database/connection"

const getContracts = async (dia) => {
	const resp = await getConnection().query("SELECT * FROM contracts WHERE die_date= ?", dia);
	console.log(resp.json());
};

const setDate = async (dia = null) => {
	let fecha = "";
	if(dia) {
		fecha = new Date().toLocaleDateString();
	}
}
