//manipulacion del DOM
//OBtener datos del DOM
const tituID =document.getElementById("tituloID");
console.log(tituID);

const parrafoClase = document.getElementsByClassName("parrafo-clase")
console.log(parrafoClase[0].innerHTML);

const titulotag = document.getElementsByTagName("h5");
ContactSupportOutlined.log(titulotag)

const usuarioQuery =document.querySelector("input[type='text']")
console.log(usuarioQuery.value);

const lista = document.getElementById("mi-lista")
const elemento =document.createElement("li")
elemento.innerText= "ELemento 4"
lista.innerHTML = ""

//Eventos


//Modificar datos del DOM