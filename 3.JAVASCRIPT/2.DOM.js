//manipulacion del DOM
//OBTENER DATOS DEL DOM: SELECTORES
const titulId = document.getElementById("tituloId");
console.log(titulId);
console.log(titulId.innerHTML);

const tituloTagName = document.getElementsByTagName("h5");
console.log(tituloTagName[1].innerHTML);

const parrafosClase = document.getElementsByClassName("parrafo-clase");
console.log(parrafosClase[0].innerHTML);

const tituloNombre = document.getElementsByName("tituloNombre");
console.log(tituloNombre[0].innerHTML);

const tituloQuery = document.querySelector("#tituloId");
console.log(tituloQuery.innerHTML);

const usuarioQuery = document.querySelector("input[type='text']");
console.log(usuarioQuery.value);

const passQuery = document.querySelector("input[type='password']");
console.log(passQuery.value);

//MODIFICAR DATOS DEL DOM
const lista = document.getElementById("mi-lista");
const elemento = document.createElement("li");
elemento.innerText = "Elemento 4";
lista.innerHTML = "<li>Elemento 1</li><li>Elemento 2</li><li>Elemento 3</li>";
lista.appendChild(elemento);

setTimeout(() => {
  lista.removeChild(elemento);
}, 3000);
setTimeout(() => {
  lista.innerHTML = "hola todos";
}, 5000);

//EVENTOS
function mostrarMensaje() {
  alert("Hola, has hecho click");
}

//crear un envento con listener
tituloNombre[0].addEventListener("click", mostrarMensaje);
usuarioQuery.addEventListener("keyup", (e) => {
  console.log(e.target.value);
});

for (dato of parrafosClase) {
  dato.addEventListener("click", (e) => {
    console.log(e.target.innerHTML);
    e.target.style.color = "red";
    e.target.style.fontSize = "30px";
  });
  //console.log(parrafosClase[dato].innerHTML);
}

const desaparecer = () => {
  usuarioQuery.style.display = "none";
  passQuery.style.display = "none";
};
