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
      return alumnassss.innerHTML += `<p>${element.name}</p>`

    })
    return render;

  })
}


/*const dataJson = {"name":"Lizeth","timezone":"America/Lima"};
  const objetoJson = JSON.stringify(dataJson.name + " " + dataJson.timezone);
  document.getElementById("tabla").innerHTML = objetoJson;*/

window.computeUsersStats = (users, progress, courses) => {

};
  
window.sortUsers =(users, orderBy, orderDirection) => {
  
};
  
window.filterUsers =(users, search) => {
  
};
  
window.processCohortData =(options) => {
  
};