const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const render = require('./src/page-template.js');

const teamMembers = [];

// Prompt the questions
const promptUser = () => {
    return inquirer.prompt([
    {
        name: ,
        type: 'input',
        message: 'Are you an employee at RealBuzz?', 


    },
    {
        name: ,
        type: 'input',
        message: 'What is your role?', 


    },
    {
        name: ,
        type: 'input',
        message: 'What is your name?', 


    },
    {
        name: ,
        type: 'input',
        message: 'What is your social media?', 


    },
    {
        name: ,
        type: 'input',
        message: , 


    },
    {
        name: ,
        type: 'input',
        message: , 


    },
    {
        name: ,
        type: 'input',
        message: , 


    }
])
};


// Create the HTML file with the data received
    const init = () => {
    promptUser()
        .then((answer) => writeFile('index.html', generateHTML(answers)))
        .then(() => console.log('Successfully created index.html'))
        .catch((err) => console.log(err))

    }

    init();