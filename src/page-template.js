const generateTeam = (team) => {
  // create the manager html
  const generateManager = (manager) => {
    return `
        <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${answer.name}</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${answer.id}</li>
          <li class="list-group-item">${answer.email}</li>
          <li class="list-group-item">${answer.officerNumber}</li>
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
          <h5 class="card-title">${answer.name}</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${answer.id}</li>
          <li class="list-group-item">${answer.email}</li>
          <li class="list-group-item">${answer.github}</li>
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
      <h5 class="card-title">${answer.name}</h5>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${answer.id}</li>
      <li class="list-group-item">${answer.email}</li>
      <li class="list-group-item">${answer.school}</li>
    </ul>
  </div>
        `;
  };

  // use the team array to generate pieces of html based on the employee role
  teamMembers.push();
};

module.exports = (teamMembers) => {
  // template literal - html body that calls the generate team function
  `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="style.css" />
      <title>Team Generator</title>
    </head>
    <body>
      <header>
        <nav class="navbar bg-light">
          <div class="container-fluid red">
            <a class="mx-auto navbar-brand" href="#"> <h1>Team Generator</h1> </a>
          </div>
        </nav>
      </header>
      <main>
        
      </main>
    </body>
  </html>`;
};
