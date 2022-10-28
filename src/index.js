const inquirer = require('inquirer')

const {writeFile} = require('fs').promises;


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

const generateHTML = ({ engineer, intern, manager}) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Team Profile Generator</title>
</head>
<body>
  </div>
</div>
</body>
</html>`;

// Create the HTML file with the data received
    const init = () => {
    promptUser()
        .then((answer) => writeFile('index.html', generateHTML(answers)))
        .then(() => console.log('Successfully created index.html'))
        .catch((err) => console.log(err))

    }

    init();