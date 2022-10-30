const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "team.html");

const render = require("./src/page-template.js");

const teamMembers = [];

// Prompt the questions
const promptUser = () => {
  return inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "Please enter your Manager's name",
        validate: (value) => {
          if (value) {
            return true;
          }
          console.log("Incorrect response");
        },
      },
      {
        name: "id",
        type: "input",
        message: "What is your employee ID?",
        validate: (value) => {
          if (value) {
            return true;
          }
          console.log("Incorrect response");
        },
      },
      {
        name: "email",
        type: "input",
        message: "What is your email?",
        validate: (value) => {
          if (value) {
            return true;
          }
          console.log("Incorrect response");
        },
      },
      {
        name: "officenumber",
        type: "input",
        message: "What is your office number?",
        validate: (value) => {
          if (value) {
            return true;
          }
          console.log("Incorrect response");
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      teamPrompt();
    });
};

//Prompt user to create their team members or finish and build HTML
const teamPrompt = () => {
  return inquirer
    .prompt([
      {
        name: "build_team",
        type: "list",
        message: "Choose an option to continue",
        choices: ["Engineer", "Intern", "Finish building"],
        validate: (value) => {
          if (value) {
            return true;
          }
          console.log("Incorrect response");
        },
      },
    ])
    .then((answers) => {
      if (answers.build_team === "Engineer") {
        teamEngineer();
      } else if (answers.build_team === "Intern") {
        teamIntern();
      } else console.log("how the hell do I do this?:)");
    });
};
//Prompt user to build engineer
const teamEngineer = () => {
  return inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "Please enter the Engineer's name",
        validate: (value) => {
          if (value) {
            return true;
          }
          console.log("Incorrect response");
        },
      },
      {
        name: "id",
        type: "input",
        message: "Enter an employee ID",
        validate: (value) => {
          if (value) {
            return true;
          }
          console.log("Incorrect response");
        },
      },
      {
        name: "email",
        type: "input",
        message: "Enter your email?",
        validate: (value) => {
          if (value) {
            return true;
          }
          console.log("Incorrect response");
        },
      },
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
      const engineer1 = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );

      teamPrompt();
    });
};
//Prompt user to build Intern
const teamIntern = () => {
  return inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "Please enter the Intern's name",
        validate: (value) => {
          if (value) {
            return true;
          }
          console.log("Incorrect response");
        },
      },
      {
        name: "id",
        type: "input",
        message: "Enter an employee ID",
        validate: (value) => {
          if (value) {
            return true;
          }
          console.log("Incorrect response");
        },
      },
      {
        name: "email",
        type: "input",
        message: "Enter your email?",
        validate: (value) => {
          if (value) {
            return true;
          }
          console.log("Incorrect response");
        },
      },
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
      const intern1 = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );

      teamPrompt();
    });
};

//Create the HTML file with the data received
const init = () => {
  generateTeam()
    .then((answers) => writeFile("index.html", generateHTML(answers)))
    .then(() => console.log("Successfully created index.html"))
    .catch((err) => console.log(err));
};

// init();
promptUser();
