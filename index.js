const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
//Library
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "team.html");

const render = require("./src/page-template.js");

const teamMembers = [];

// Prompt the questions
const promptUser = () => {
  return inquirer.prompt([
    {
      name: "addMember",
      type: "list",
      message: "Would you like to add a new member to your team?",
      choices: ["Yes", "No"],
      validate: (answers) => {
        if (answers) {
          return true;
        }
        return "incorrect answer";
      },
    },
  ]);
};

const addInfo = () => {
  return inquirer.prompt([
    {
      name: "name",
      type: "input",
      message: "Please enter your name",
      validate: (value) => {
        if (!value) {
          console.log("Please enter your name");
        }
        return true;
      },
    },
    {
      name: "id",
      type: "input",
      message: "Please enter your ID",
      validate: (value) => {
        if (!value) {
          console.log("Please enter your ID");
        }
        return true;
      },
    },
    {
      name: "email",
      type: "input",
      message: "Please enter your email",
      validate: (value) => {
        if (!value) {
          console.log("Please enter your email");
        }
        return true;
      },
    },
    {
      name: "role",
      type: "input",
      message: "Please enter your role",
      validate: (value) => {
        switch (value) {
          case "Manager":
            console.log("manager");
            break;
          case "Intern":
            return addIntern();
            break;
          case "Engineer":
            return addEngineer();
            break;
        }
      },
    },
  ]);
};

//Prompt user to build engineer
const addEngineer = () => {
  return inquirer
    .prompt([
      {
        name: "github",
        type: "input",
        message: "Please enter a valid github",
        validate: (value) => {
          if (value) {
            return true;
          }
          console.log("Incorrect response");
        },
      },
    ])
    .then((answers) => {
      const newEngineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      teamMembers.push(newEngineer);
      teamPrompt();
    });
};
//Prompt user to build Intern
const addIntern = () => {
  return inquirer
    .prompt([
      {
        name: "github",
        type: "input",
        message: "Please enter your school",
        validate: (value) => {
          if (value) {
            return true;
          }
          console.log("Incorrect response");
        },
      },
    ])
    .then((answers) => {
      const newIntern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      teamMembers.push(newIntern);

      teamPrompt();
    });
};

//Create the HTML file with the data received
const generate = () => {
  fs.writeFile("index.html", generateTeam(teamMembers), "utf-8")
    .then(() => console.log("Successfully created index.html"))
    .catch((err) => console.log(err));
};

// init();
promptUser();
