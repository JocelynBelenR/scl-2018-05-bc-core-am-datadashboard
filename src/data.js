//Mostrar lista de usuarios 

const button = document.getElementById('alumnas');
const container = document.getElementById('tabla');

const usersJSON = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';

fetch(usersJSON)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    renderUsers(data);
  })

const renderUsers = data => {
  button.addEventListener('click', () => {
    const render = data.forEach(element => {
      return alumnassss.innerHTML += `<p>${element.name.toUpperCase()}</p>`

    })
    return render;

  })
}

//Mostrar progreso de las alumnas 
const progressJSON = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';

fetch(progressJSON)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    renderProgress(data);
  })

const renderProgress = data => {
  button.addEventListener('click', () => {
    const render = data.forEach(element => {
      return progresos.innerHTML += `<p>${element.progress}</p>`

    })
    return render;

  })
}

//Mostrar cohorts de las alumnas
const cohortsJSON = '../data/cohorts.json';

fetch(cohortsJSON)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    renderCohorts(data);
  })

const renderCohorts = data => {
  button.addEventListener('click', () => {
    const render = data.forEach(element => {
      return cohortss.innerHTML += `<p>${element.cohorts}</p>`

    })
    return render;

  })
}




window.computeUsersStats = (users, progress, courses) => {

};

window.sortUsers = (users, orderBy, orderDirection) => {

};

window.filterUsers = (users, search) => {

};

window.processCohortData = (options) => {

};