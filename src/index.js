const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern")
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs/promises");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./page-template");
const Employee = require("../lib/Employee");



// const manager1 = new Manager (data.name, data.id, data.email, data.officeNumber);

// )};

// team.push(manager1);

    const team = []
    async function addManager (){

    let data = await inquirer.prompt([


])
    // const manager1 = new Manager (data.name, data.id, data.email, data.officeNumber);

    // {
    //     type:'input',
    //     name:'name',
    //     message: "What is your name?"

    //   },

    userPrompt ()





                // function addEngineer(){


                // };


                // function addIntern(){


                // };

                // function userPrompt(){
                // // enquirer function goes here - that gives options

                // };

        const { name, id, email, officeNumber} = await inquirer
        .prompt([

        {
          type:'input',
          name:'name',
          message: "What is your name?"

        },

        {
        type:'input',
        name:'id',
       message: "What is your ID number?"
,
        },
        
       
        {
        type:'input',
        name:'email',
        message: 'What is your Email address?'
        },

        {
        type:'input',
        name:'OfficeNumber',
        message: 'What is your Office Number?'
        }



    )]};
    
    await fs.writeFile('ManagerOutput.html', data);