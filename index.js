// // linking inquirer package
// const { prompt } = require("inquirer");
// // linking Database
// const db = require("./db");
// // linking counsole tale. package
// require("console.table");
// // linking mysql package
// const mysql = require("mysql2");

// const connection = mysql.createConnection({
//   host: "localhost",
//   // Your username
//   user: "root",
//   // Your password
//   password: `${process.env.PASSWORD}`,
//   database: "employees"
// });

// connection.connect(function (err) {
//   if (err) throw err;
// });

// function init() {
//   prompt([
//     {
//       type: "list",
//       name: "choice",
//       message: "what would you like to choose?",
//       choices: [
//         {
//           name: "View All Employees",
//           value: "VIEW_EMPLOYEES"
//         },
//         {
//           name: "Add Employee",
//           value: "ADD_EMPLOYEE"
//         },
//         {
//           name: "Delete Employee",
//           value: "REMOVE_EMPLOYEE"
//         },
//       ]
//     }
//   ]).then(res =>{
//     let choice = res.choice;
//   })
//   switch (choice) {
//     case "VIEW_EMPLOYEES":
//       viewEmployees();
//       break;
//     case "ADD_EMPLOYEE":
//       addEmployee();
//       break;
//     case "REMOVE_EMPLOYEE":
//       removeEmployee()
//     break;
//   }
// }

// init();

