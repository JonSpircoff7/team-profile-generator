const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
// const generateHTML = require('./utils/generateHTML.js')
//Library
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamMembers = [];

// Prompt the user to addMember
const promptUser = () => {
  return inquirer.prompt([
    {
      name: "addMember",
      type: "list",
      message: "Would you like to add a new member to your team?",
      choices: ["Yes", "No"],
    }   
  ])
  .then((answers) => {
    if (answers.addMember === "Yes"){
      return addRole();
    }else console.log('finish');
  })};

const addRole = () => {
  return inquirer.prompt([
    {
      name: "addRole",
      type: "list",
      message: "Please select the member you would like to add",
      choices: ["Intern", "Engineer", "Manager"],
    }   
  ]).then((answers)=> { 
    if(answers.addRole === 'Manager'){
    return addManager();
  }else if (answers.addRole === 'Intern'){
    console.log('intern')
    return addIntern();
  }else if(answers.addRole === 'Engineer'){
    return addEngineer();
}else console.log('Incorrect response');
})};

//Prompt user to build engineer
const addEngineer = () => {
  return inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "Please enter your name",
        validate: (value) => {
          if (value) {
            return true
          }console.log("Please enter your name");
        },
      },
      {
        name: "id",
        type: "input",
        message: "Please enter your ID",
        validate: (value) => {
          if (value) {
            return true
          }console.log("Please enter your ID");
        },
      },
      {
        name: "email",
        type: "input",
        message: "Please enter your email",
        validate: (value) => {
          if (value) {
            return true
          }console.log("Please enter your email");
        },
      },
      {
        name: "github",
        type: "input",
        message: "Please enter a valid github",
        validate: (value) => {
          if (value) {
            return true;
          }else console.log("Incorrect response");
        },
      },
    ])
    .then((answers) => {
      const newEngineer = new Engineer(answers);
      teamMembers.push(newEngineer);
      teamPrompt();
    });
};
//Prompt user to build Intern
const addIntern = (userInfo) => {
  return inquirer
  .prompt([
    {
      name: "name",
      type: "input",
      message: "Please enter your name",
      validate: (value) => {
        if (value) {
          return true
        }console.log("Please enter your name");
      },
    },
    {
      name: "id",
      type: "input",
      message: "Please enter your ID",
      validate: (value) => {
        if (value) {
          return true
        }console.log("Please enter your ID");
      },
    },
    {
      name: "email",
      type: "input",
      message: "Please enter your email",
      validate: (value) => {
        if (value) {
          return true
        }console.log("Please enter your email");
      },
    },{
        name: "school",
        type: "input",
        message: "Please enter your school",
        validate: (value) => {
          if (value) {
            return true;
          }else console.log("Incorrect response");
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const newIntern = new Intern(answers);
      teamMembers.push(newIntern);
      promptUser();
    });
};
//Prompt user to build Manager
const addManager = (userInfo) => {
  return inquirer
  .prompt([
    {
      name: "name",
      type: "input",
      message: "Please enter your name",
      validate: (value) => {
        if (value) {
          return true
        }console.log("Please enter your name");
      },
    },
    {
      name: "id",
      type: "input",
      message: "Please enter your ID",
      validate: (value) => {
        if (value) {
          return true
        }console.log("Please enter your ID");
      },
    },
    {
      name: "email",
      type: "input",
      message: "Please enter your email",
      validate: (value) => {
        if (value) {
          return true
        }console.log("Please enter your email");
      },
    },{
        name: "officeNumber",
        type: "input",
        message: "Please enter your office number",
        validate: (value) => {
          if (value) {
            return true;
          }else console.log("Incorrect response");
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const newManager = new Manager(answers);
      teamMembers.push(newManager);
      promptUser();
    });
};

// //Create the HTML file with the data received
// const generateHTML = (teamMembers) => {
//   fs.writeFile("index.html", generateTeam(teamMembers), "utf-8")
//     .then(() => console.log("Successfully created index.html"))
//     .catch((err) => console.log(err));
// };

// // init();
promptUser();
