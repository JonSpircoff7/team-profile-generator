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
  team.push()
};

module.exports = (team) => {
  // template literal - html body that calls the generate team function
};
