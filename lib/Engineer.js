const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.gihub = github;
        this.type = "Engineer";
    }

}

module.exports = Engineer;