const campeones = [
  {
    name: "EKKO",
    id: 1,
    origen: "Zaun",
    type: "Asesino",
    hability: "Mago",
    carril: "Central/Jungla",
    dificultad: "Alta",
  },
  {
    name: "EVELYN",
    id: 2,
    origen: "Islas de la Sombra,",
    type: "Asesino",
    hability: "Mago",
    carril: "Jungla",
    dificultad: "Alta",
  },
  {
    name: "JHIN",
    id: 3,
    origen: "Jonia",
    type: "Tirador",
    hability: "AD",
    carril: "ADC",
    dificultad: "Moderada",
  },
  {
    name: "JINX",
    id: 4,
    origen: "Zaun",
    type: "Tirador",
    hability: "AD",
    carril: "ADC",
    dificultad: "Moderada",
  },
  {
    name: "LILIA",
    id: 5,
    origen: "Jonia",
    type: "Luchador",
    hability: "Mago",
    carril: "Jungla",
    dificultad: "Alta",
  },
  {
    name: "VI",
    id: 6,
    origen: "Zaun",
    type: "Luchador",
    hability: "Tanque",
    carril: "Jungla",
    dificultad: "Moderada",
  },
  {
    name: "YASUO",
    id: 7,
    origen: "Jonia",
    type: "Luchador",
    hability: "AD",
    carril: "Central",
    dificultad: "Alta",
  },
];

const cargarCampeon = document.querySelector("#name");
const imgCampeon = document.querySelector(".image");

const id = document.querySelector("#id");
const origen = document.querySelector("#origen");
const type = document.querySelector("#type");
const hability = document.querySelector("#hability");
const carril = document.querySelector("#carril");
const dificultad = document.querySelector("#dificultad");

let selec = document.getElementsByClassName("imagenBoton");

for (var i = 0; i < selec.length; i++) {
  selec[i].addEventListener("click", function () {
    //var nombre = this.getAttribute("data-name");
    var valor = this.getAttribute("data-valor");
    mostrarCampeon(valor);
  });
}

function mostrarCampeon(i) {
  cargarCampeon.innerHTML = `   
        <p class="parrafo-insertado">${campeones[i].name}</p>

    `;

  if (i == 0) {
    imgCampeon.innerHTML = `
            <img 
                src="imagenes/ekko.jpg" 
                alt="Ekko"
                class="imagenCargada"
            />
        `;
  } else if (i == 1) {
    imgCampeon.innerHTML = `
        <img
            src="imagenes/evelyn.jpg"
            alt="Evelyn"
            class="imagenCargada"
        />
        `;
  }
  else if (i == 2) {
    imgCampeon.innerHTML = `
        <img
            src="imagenes/jhin.jpg"
            alt="Jhin"
            class="imagenCargada"
        />
        `;
  }
  else if (i == 3) {
    imgCampeon.innerHTML = `
        <img
            src="imagenes/Jinx.jpg"
            alt="Jinx"
            class="imagenCargada"
        />
        `;
  }
  else if (i == 4) {
    imgCampeon.innerHTML = `
        <img
            src="imagenes/Lilia.jpg"
            alt="Lilia"
            class="imagenCargada"
        />
        `;
  }

  else if (i == 5) {
    imgCampeon.innerHTML = `
        <img
            src="imagenes/Vi.jpg"
            alt="Vi"
            class="imagenCargada"
        />
        `;
  }

  else if (i == 6) {
    imgCampeon.innerHTML = `
        <img
            src="imagenes/Yasuo.jpg"
            alt="Yasuo"
            class="imagenCargada"
        />
        `;
  }



  id.innerHTML = `
        <p class="parrafo-insertado">${campeones[i].id}</p>
    `;
  origen.innerHTML = `
        <p class="parrafo-insertado">${campeones[i].origen}</p>

    `;
  type.innerHTML = `
        
        <p class="parrafo-insertado">${campeones[i].type}</p>
    `;
  hability.innerHTML = `
        
        <p class="parrafo-insertado">${campeones[i].hability}</p>
    `;
  carril.innerHTML = `
        
        <p class="parrafo-insertado">${campeones[i].carril}</p>
    `;
  dificultad.innerHTML = `
        
        <p class="parrafo-insertado">${campeones[i].dificultad}</p>
    `;
}
