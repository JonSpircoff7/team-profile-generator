const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

//Library
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "team.html");
const generateTeam = require("./src/generateTeam");
const teamMembers = [];

// Prompt the user to addMember
const promptUser = () => {
  return inquirer
    .prompt([
      {
        name: "addMember",
        type: "list",
        message: "Would you like to add a new member to your team?",
        choices: ["Yes", "No"],
      },
    ])
    .then((answers) => {
      if (answers.addMember === "Yes") {
        return addRole();
      } else console.log(teamMembers);
    });
};

//Prompt user to choose a role
const addRole = () => {
  return inquirer
    .prompt([
      {
        name: "addRole",
        type: "list",
        message: "Please select the member you would like to add",
        choices: ["Intern", "Engineer", "Manager"],
      },
    ])
    .then((answers) => {
      if (answers.addRole === "Manager") {
        return addManager();
      } else if (answers.addRole === "Intern") {
        console.log("intern");
        return addIntern();
      } else if (answers.addRole === "Engineer") {
        return addEngineer();
      } else console.log("Incorrect response");
    });
};

//Prompt user to build engineer
const addEngineer = () => {
  return inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "Please enter your name",
        validate: (answers) => {
          if (answers) {
            return true;
          }
          console.log("Please enter your name");
        },
      },
      {
        name: "id",
        type: "input",
        message: "Please enter your ID",
        validate: (answers) => {
          if (answers) {
            return true;
          }
          console.log("Please enter your ID");
        },
      },
      {
        name: "email",
        type: "input",
        message: "Please enter your email",
        validate: (answers) => {
          if (answers) {
            return true;
          }
          console.log("Please enter your email");
        },
      },
      {
        name: "github",
        type: "input",
        message: "Please enter a valid github",
        validate: (answers) => {
          if (answers) {
            return true;
          } else console.log("Incorrect response");
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
      promptUser();
    });
};
//Prompt user to build Intern
const addIntern = () => {
  return inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "Please enter your name",
        validate: (value) => {
          if (value) {
            return true;
          }
          console.log("Please enter your name");
        },
      },
      {
        name: "id",
        type: "input",
        message: "Please enter your ID",
        validate: (value) => {
          if (value) {
            return true;
          }
          console.log("Please enter your ID");
        },
      },
      {
        name: "email",
        type: "input",
        message: "Please enter your email",
        validate: (value) => {
          if (value) {
            return true;
          }
          console.log("Please enter your email");
        },
      },
      {
        name: "school",
        type: "input",
        message: "Please enter your school",
        validate: (value) => {
          if (value) {
            return true;
          } else console.log("Incorrect response");
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
      promptUser();
    });
};
//Prompt user to build Manager
const addManager = () => {
  return inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "Please enter your name",
        validate: (value) => {
          if (value) {
            return true;
          }
          console.log("Please enter your name");
        },
      },
      {
        name: "id",
        type: "input",
        message: "Please enter your ID",
        validate: (value) => {
          if (value) {
            return true;
          }
          console.log("Please enter your ID");
        },
      },
      {
        name: "email",
        type: "input",
        message: "Please enter your email",
        validate: (value) => {
          if (value) {
            return true;
          }
          console.log("Please enter your email");
        },
      },
      {
        name: "officeNumber",
        type: "input",
        message: "Please enter your office number",
        validate: (value) => {
          if (value) {
            return true;
          } else console.log("Incorrect response");
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const newManager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      teamMembers.push(newManager);
      promptUser();
    });
};

//Create the HTML file with the data received
const init = (teamMembers) => {
  fs.writeFile(distPath, generateTeam(teamMembers), "utf-8", () =>
    console.log("Successfully created index.html")
  ).catch((err) => console.log(err));
};

init();

promptUser();
