const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const generateHTML = (team) => {
  const teamMembers = [];
  console.log(teamMembers);

  let footer = `</div>
   </div>
</body>
</html>`;

  // create the manager html
  const generateManager = (manager) => {
    return `
            <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${manager.name}</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${manager.id}</li>
              <li class="list-group-item">${manager.email}</li>
              <li class="list-group-item">${manager.officerNumber}</li>
            </ul>
          </div>
            `;
  };

  // create the html for engineers
  const generateEngineer = (engineer) => {
    return `
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${engineer.name}</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${engineer.id}</li>
              <li class="list-group-item">${engineer.email}</li>
              <li class="list-group-item">${engineer.github}</li>
            </ul>
          </div>

            `;
  };

  // create the html for interns
  const generateIntern = (intern) => {
    return `
        <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${intern.name}</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${intern.id}</li>
          <li class="list-group-item">${intern.email}</li>
          <li class="list-group-item">${intern.school}</li>
        </ul>
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
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>
          <nav class="navbar" id="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  <!--Team Cards-->
                  ${cards}
              </div>
          </div>
      </main>
      
  </body>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>
`;
};

module.exports = generateHTML;
 