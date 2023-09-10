// Import stylesheets
import './style.css';
let token = "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";

// Write Javascript code!

/**
 * Obtien un usuario del repositorio publico de usuarios de github
 * @returns {void}
 */
function getUser() {
  //Url
  const url = "https://api.github.com/users/octocat"; 
  
  //Configura opciones
  let options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
  }

  //Inicializa petición HTTP
  fetch(url, options)
  .then(response => response.text())
  .then(data => {
    const json = JSON.parse(data);
    console.log(json);
  });
}

function onInit() {
  getUser()
}

onInit();