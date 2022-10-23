const inquirer = require("inquirer");
const Connection = require("../connection");
inquirer.prompt([
  {
    type: "list",
    name: "start",
    message: "What would you like to do?",
    choices: [
      {
        value: "viewEmpl",
        name: "View All Employees",
      },
      {
        value: "emplDepartment",
        name: "View All Employees By Department",
      },
      {
        value: "emplManager",
        name: "View All Employees By Manager",
      },
      {
        name: "Add Employee",
        value: "addEmpl",
      },
      {
        value: "removeEmpl",
        name: "Remove Employee",
      },
      {
        value: "updateRole",
        name: "Update Employee Role",
      },
      {
        value: "updateManager",
        name: "Update Employee Manager",
      },
      {
        value: "viewRoles",
        name: "View All Roles",
      },
      {
        value: "addDepart",
        name: "Add Department",
      },
      {
        value: "removeDepart",
        name: "Remove Department",
      },
      {
        value: "quit",
        name: "Quit",
      },
    ],
  },
]);

const listOfOptions = [
  "viewEmpl",
  "emplDepartment",
  "emplManager",
  "addEmpl",
  "removeEmpl",
  "updateRole",
  "updateManager",
  "viewRoles",
  "addDepart",
  "removeDepart",
  "quit",
];

/*function viewEmployeeDepartment() {}

function viewEmployeeManager() {}

function addEmployee() {}

function removeEmployee() {}

function updateRole() {}

function updateManager() {}

function viewAllRoles() {}

function addDepartment() {}

function removeDepartment() {}

function quit() {}

viewEmployees();*/
