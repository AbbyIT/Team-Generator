const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const Employee = require("../lib/Employee");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

let team = [];

// example - push to array everytime you are done adding members to the team e.g add engnr, add mgr, add intern 

// call render once they are sone filling out information
// ensure you are pussing to team
// use fs.write file

// when render is called you will receive html document which you will then write to file

StartProgram()
async function StartProgram() {
    team.push(new Employee ("Andrew",1, "test@test.com"))
    
    let htmlDoc = render(team)


}