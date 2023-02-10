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
    const { contract_id, from, to, created_at, updated_at, die_date, state } =
      req.body;

    if (
      contract_id === undefined ||
      from === undefined ||
      to === undefined ||
      created_at === undefined ||
      updated_at === undefined ||
      die_date === undefined ||
      state === undefined
    ) {
      resp.json({
        message: "Error al procesar la información enviada :(...",
      });
    }

    const data = {
      contract_id,
      from,
      to,
      created_at,
      updated_at,
      die_date,
      state,
    };
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
    const { updated_at, state } = req.body;

    if (updated_at === undefined || state === undefined) {
      resp.json({
        message: "Error al procesar la información enviada :(...",
      });
    }

    const data = { updated_at, state };
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
