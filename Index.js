const inquirer = require('inquirer')
const fs = require('fs')

const manager = require('./lib/Manager');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');

let team = []

const employeeQuestions = [{
    type: 'input',
    name: 'name',
    message: 'Enter employee name (required)',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter a name!');
            return false;
        }
    },
    type: 'input',
    name: 'id',
    message: 'Enter an employee ID (required)',
    validate: idInput => {
        if (idInput) {
            return true;
        } else {
            console.log('Please enter an ID!');
            return false;
        }
    },
    type: 'input',
    name: 'email',
    message: 'Enter an employee email (required)',
    validate: emailInput => {
        if (emailInput) {
            return true;
        } else {
            console.log('Please enter an email!');
            return false;
        }
    },
    type: 'list',
    name: 'type',
    message: 'Enter employee type',
    choices: ["Manager", "Engineer", "Intern"]
    },
]