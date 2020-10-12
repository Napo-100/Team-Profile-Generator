const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");

const renderDir = path.resolve(__dirname, "dist");
const renderPath = path.resolve(renderDir, "index.html");

const pageTemplate = require("./src/page-template");

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let teamProfile = []

const employeeQuestions = [
    {
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
        }
    },
    {
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
        }
    },

    {
        type: 'input',
        name: 'email',
        message: 'Enter employee email address (required)',
        validate: function(email) {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (valid) {
                return true;
            } else {
                console.log(".  Please enter a valid email!")
                return false;
            }
        }
    },

    {
        type: 'list',
        name: 'role',
        message: 'Enter employee type',
        choices: ["Manager", "Engineer", "Intern"]
    }
]

const managerQuestion = {
    type: 'input',
    name: 'officeNumber',
    message: "Enter the manager's office number",
    validate: officeInput => {
        if (officeInput) {
            return true;
        } else {
            console.log('Please enter an office number!');
            return false;
        }
    }
}

const engineerQuestion = {
    type: 'input',
    name: 'gitHub',
    message: "Enter the engineer's Github profile name",
    validate: gitInput => {
        if (gitInput) {
            return true;
        } else {
            console.log('Please enter a Github profile name!');
            return false;
        }
    }
}

const internQuestion = {
    type: 'input',
    name: 'school',
    message: "Enter the name of the intern's school",
    validate: schoolInput => {
        if (schoolInput) {
            return true;
        } else {
            console.log('Please enter a school!');
            return false;
        }
    }
}

const end = {
    type: 'confirm',
    name: 'end',
    message: 'Would you like to enter another employee?',
    default: false
}

function createEmployee() {
    inquirer.prompt(employeeQuestions).then(function (answers) {
        switch (answers.role) {
            case "Manager":
                createManager(answers)
                break;
            case "Engineer":
                createEngineer(answers)
                break;
            case "Intern":
                createIntern(answers)
                break;
        }
    })
}

function createManager(answers) {
    inquirer.prompt(managerQuestion).then(function (manager) {
        let { name, id, email } = answers;
        let newManager = new Manager(name, id, email, manager.officeNumber);
        teamProfile.push(newManager)
        completeTeam();
    })
}

function createEngineer(answers) {
    inquirer.prompt(engineerQuestion).then(function (engineer) {
        let { name, id, email } = answers;
        let newEngineer = new Engineer(name, id, email, engineer.gitHub);
        teamProfile.push(newEngineer)
        completeTeam();
    })
}

function createIntern(answers) {
    inquirer.prompt(internQuestion).then(function (intern) {
        let { name, id, email } = answers;
        let newIntern = new Intern(name, id, email, intern.school);
        teamProfile.push(newIntern)
        completeTeam();
    })
}

function completeTeam() {
    inquirer.prompt(end).then(function (answers) {
        if (answers.end == false) {
            renderHTML();
            console.log("You created your team! Congratulations! Checkout Index.HTML")
        } else {
            createEmployee();
        }
    })
}

function renderHTML() {
    if(!fs.existsSync(renderDir)) {
        fs.mkdirSync(renderDir);
    }
    fs.writeFileSync(renderPath, pageTemplate(teamProfile), "utf-8");
};

createEmployee();