// Import stylesheets
import './style.css';

//Variables globales
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
    const keys = Object.keys(json)
    setAlert(keys.toLocaleString());
  });
}

/**
 * Función para mostrar resultado
 * @param {string}  
 * @return {void}
 */
 function setAlert(value) {
  let alert = document.getElementById('alert');
  alert.removeAttribute('hidden');
  alert.innerHTML = `
  <div class="text-break">
    Keys: [${value}]
  </div>
  `;
}


function onInit() {
  getUser()
}

onInit();