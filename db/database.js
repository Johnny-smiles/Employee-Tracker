const mysql = require("mysql2");
require("dotenv").config();
const connection = mysql.createConnection({
  host: "localhost",
  // Your username
  user: `${process.env.USER}`,
  // Your password
  password: `${process.env.PASSWORD}`,
  database: "employees"
});
connection.connect(function (err) {
  if (err) throw err;
});
module.exports = connection;