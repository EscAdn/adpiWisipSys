import mysql from "promise-mysql";
import config from "./../config.js";

const connection = mysql.createConnection({
  host: config.host,
  database: config.database,
  user: config.user,
  password: config.password,
  port: config.port_db,
});

export const getConnection = () => {
  // console.log(connection);
  return connection;
};
