import moment from "moment/moment";
import { getConnection } from "./../database/connection";

const getInvoices = async (req, res) => {
  try {
    const conn = await getConnection();
    const result = await conn.query(
      "SELECT iv.`id`, cl.name as client, ad.address, pl.name as plan, pl.price, iv.`from`, iv.`to`, iv.`created_at`, iv.`updated_at`, iv.`die_date`, iv.`state` FROM `invoices` as iv, contracts as ct, clients as cl, plans as pl, addresses as ad WHERE iv.contract_id = ct.id AND ct.client_id = cl.id AND ct.plan_id = pl.id AND cl.address_id=ad.id ORDER BY iv.id DESC;"
    );
    res.json(result);
  } catch (error) {
    res.json({ err: error.message });
  }
};

const getInvoice = async (req, res) => {
  try {
    const { id } = req.params;

    const conn = await getConnection();
    const result = await conn.query(
      "SELECT iv.`id`, cl.name as client, ad.address, pl.name as plan, pl.price, iv.`from`, iv.`to`, iv.`created_at`, iv.`updated_at`, iv.`die_date`, iv.`state` FROM `invoices` as iv, contracts as ct, clients as cl, plans as pl, addresses as ad WHERE iv.contract_id = ct.id AND ct.client_id = cl.id AND ct.plan_id = pl.id AND cl.addrss_id=ad.id AND iv.id = ? ORDER BY iv.id DESC;",
      id
    );
    res.json(result);
  } catch (error) {
    res.json({ err: error.message });
  }
};

const addInvoice = async (req, res) => {
  try {
    // const { contract_id, from, to, die_date, state } = req.body;
    let data = req.body;
    data.to = moment(data.from).add(1, "M").add(-1, "d").format("YYYY-MM-DD");
    data.created_at = moment().format("YYYY-MM-DD");
    data.updated_at = moment().format("YYYY-MM-DD");
    data.die_date = moment(data.from)
      .add(data.die_date, "d")
      .format("YYYY-MM-DD");
    data.state = "Activa"; //Vencida, Pagada

    const conn = await getConnection();
    const result = await conn.query("INSERT INTO `invoices` SET ?", data);
    res.json(result);
  } catch (error) {
    res.json({ err: error.message });
  }
};

const updateInvoice = async (req, res) => {
  try {
    const { id } = req.params;

    let data = {
      updated_at: moment().format("YYYY-MM-DD"),
      state: "Pagada",
    };

    const conn = await getConnection();
    const result = await conn.query("UPDATE `invoices` SET ? WHERE id = ?", [
      data,
      id,
    ]);
    res.json(result);
  } catch (error) {
    res.json({ err: error.message });
  }
};

const deleteInvoice = async (req, res) => {
  try {
    const { id } = req.params;
    const conn = await getConnection();
    const result = await conn.query("DELETE FROM `invoices` WHERE id = ?", id);
    res.json(result);
  } catch (error) {
    res.json({ err: error.message });
  }
};

export const methods = {
  getInvoices,
  getInvoice,
  addInvoice,
  updateInvoice,
  deleteInvoice,
};
