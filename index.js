// linking inquirer package
const { prompt } = require("inquirer");
// linking Database
const connection = require("./db/database");
// linking counsole tale. package
require("console.table");
// linking mysql package
function init() {
  prompt([
    {
      type: "list",
      name: "choice",
      message: "what would you like to choose?",
      choices: [
        {
          name: "View All Employees",
          value: "VIEW_EMPLOYEES"
        },
        {
          name: "Add Employee",
          value: "ADD_EMPLOYEE"
        },
        {
          name: "Delete Employee",
          value: "REMOVE_EMPLOYEE"
        },
        {
          name: "Quit",
          value: "QUIT"
        }
      ]
    }
  ]).then(res => {
    let choice = res.choice;
    switch (choice) {
      case "VIEW_EMPLOYEES":
        viewEmployees();
        break;
      case "ADD_EMPLOYEE":
        addEmployee();
        break;
      case "REMOVE_EMPLOYEE":
        removeEmployee()
        break;
      case "QUIT":
        connection.end();
      default:
        break;
    }
  });
}
  // Find all employees, join with roles and departments to display their roles, salaries, departments, and managers
  function viewEmployees() {
    connection.query("SELECT * FROM employee", (err, result) => {
      console.table(result);
      init();
    });
  }

  // Create a new employee
  function addEmployee(employee) {
    prompt([
      {
        type: "input",
        name: "first_name",
        message: "What is employee's first name?"
      },
      {
        type: "input",
        name: "last_name",
        message: "What is employee's last name?"
      },
      {
        type: "input",
        name: "role",
        message: "Enter the role id for this employee."
      },
      {
        type: "input",
        name: "manager_id",
        message: "Please enter the manager id for this employee."
      },
    ]).then(res =>{
      connection.query("INSERT INTO employee SET ?", {
        first_name: res.first_name,
        last_name: res.last_name,
        role_id: res.role,
        manager_id: res.manager_id
      }, (err) => {
        if (err) throw err;
        console.log("successfully added employee");
        init();
    })
    } );
  }

  // Remove an employee with the given id
  function removeEmployee(employeeId) {
    return this.connection.promise().query(
      "DELETE FROM employee WHERE id = ?",(err,result) => {
        console.table(result);
        init();
      });
  }
 

init();

