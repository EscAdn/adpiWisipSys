import mysql from "promise-mysql";
import config from "./../config.js";

const connection = mysql.createConnection({
  host: config.host,
  database: config.database,
  user: config.user,
  password: "",
});

export const getConnection = () => {
  return connection;
};
