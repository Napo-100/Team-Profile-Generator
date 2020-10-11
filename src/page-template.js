
const teamGeneration = (teamProfile) => {
  const managerCard = (manager) => {
    return `
      <div class="card" style="width: 18rem;">
      <div class="card-body text-white bg-primary">
        <h5 class="card-title">${manager.getName()}</h5>
        <p class="card-text manager"><i class="fas fa-address-card"></i> Manager</p>
      </div>
      <div class="card-body bg-light">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.getID()}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
        <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
      </ul>
      </div>
      </div>
   `;
  };
  const engineerCard = (engineer) => {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body text-white bg-primary">
      <h5 class="card-title">${engineer.getName()}</h5>
      <p class="card-text engineer"><i class="fas fa-address-card"></i> Engineer</p>
    </div>
    <div class="card-body bg-light">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineer.getID()}</li>
      <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
      <li class="list-group-item">Github: ${engineer.getGithub()}</li>
    </ul>
    </div>
    </div>
   `;
  };
  const internCard = (intern) => {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body text-white bg-primary">
      <h5 class="card-title">${intern.getName()}</h5>
      <p class="card-text intern"><i class="fas fa-address-card"></i> Intern</p>
    </div>
    <div class="card-body bg-light">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${intern.getID()}</li>
      <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
      <li class="list-group-item">School: ${intern.getSchool()}</li>
    </ul>
    </div>
    </div>
   `;
  };

  const teamCard = [];

  teamCard.push(
    teamProfile
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => managerCard(manager))
  );

  teamCard.push(
    teamProfile
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => engineerCard(engineer))
  );

  teamCard.push(
    teamProfile
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => internCard(intern))
  );

  return teamCard.join("");
};

module.exports = teamProfile => {
  return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile Generator</title>

      <!-- Boostrap CSS -->
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
      <!-- Font Awesome Icons -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" />
    </head>
  
    <body>
    <nav class="navbar navbar-dark bg-success mb-5">
    <span class="navbar-brand mt-4 mb-4 w-100 text-center"><h1>Team Profile</h1></span>
      </nav>

      <div class="container">
      <div class="d-flex justify-content-around">
         
          ${teamGeneration(teamProfile)}
      </div>
  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js">
  </script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous">
  </script>


    </body>
    </html>
    `;
}