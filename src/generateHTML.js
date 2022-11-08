const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const generateHTML = (team) => {
  const teamMembers = [];

  // create the manager html
  const generateManager = (manager) => {
    return `
            
          <div class="card">
          <span class="material-symbols-outlined">
developer_mode
</span>
          <div class="card-body">
            <h4 class="card-title">${manager.name}</h4>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${manager.id}</li>
              <li class="list-group-item">${manager.email}</li>
              <li class="list-group-item">${manager.officeNumber}</li>
            </ul>
          </div>
        </div>

            `;
  };

  // create the html for engineers
  const generateEngineer = (engineer) => {
    return `
         
    <div class="card">
    <span class="material-symbols-outlined">
engineering
</span>
    <div class="card-body">
      <h4 class="card-title">${engineer.name}</h4>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${engineer.id}</li>
        <li class="list-group-item">${engineer.email}</li>
        <li class="list-group-item">${engineer.github}</li>
      </ul>
    </div>
  </div>

            `;
  };

  // create the html for interns
  const generateIntern = (intern) => {
    return `
            
    <div class="card">
    <span class="material-symbols-outlined">
integration_instructions
</span>
    <div class="card-body">
      <h4 class="card-title">${intern.name}</h4>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${intern.id}</li>
        <li class="list-group-item">${intern.email}</li>
        <li class="list-group-item">${intern.school}</li>
      </ul>
    </div>
  </div>
            `;
  };
  for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() === "Manager") {
      const manager = generateManager(team[i]);
      teamMembers.push(manager);
    } else if (team[i].getRole() === "Engineer") {
      const engineer = generateEngineer(team[i]);
      teamMembers.push(engineer);
    } else if (team[i].getRole() === "Intern") {
      const intern = generateIntern(team[i]);
      teamMembers.push(intern);
    }
  }
  const cards = teamMembers.join("");

  const generator = generatePage(cards);
  return generator;

  // use the team array to generate pieces of html based on the employee role
};

const generatePage = (cards) => {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
    />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    />
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,300,0,0" />
    <link rel="stylesheet" href="./style.css" />
    <title>Team Profile Generator</title>
  </head>

  <body>
    <header>
      <nav class="navbar" id="navbar">
        <h1>Team Profile Generator</h1>
      </nav>
    </header>
    <main>
      <div class="d-flex flex-row justify-content-center container">
        <div class="row">
          <!-- Generated content -->
                  ${cards}
              </div>
          </div>
      </main>
      
      </body>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    </html>
    
`;
};

module.exports = generateHTML;
