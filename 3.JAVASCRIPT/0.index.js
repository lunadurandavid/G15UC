/*
JAVASCRIPT>
  - lenguaje interpretado
  - multiparadigma: funcional, POO, procedimental
  - dinamico: debilmente tipado

variables
entrada/salida de datos
condicionales
funciones
estructuras datos: listas, arrays
ciclos(for in, for a, foreach, map, filter, reduce, find)
objetos
DOM - HTML
callbacks, promesas
PETICIONES API - FETCH
*/

//variables: numericas, texto, boleanos, referencias
numero1 = 3;
let numero2 = 2;
//debugger;
const numero3 = 3;
//var numero4 = 4;
numero2 = "2";
numero2 = true;
let numero4 = "3";
// 0, [], null, undefined, ""
if (numero1 === numero4) {
  console.log("es igual");
} else {
  console.log("no es igual");
}
//salida
// console.log(numero1);
// console.log(numero2);
// console.error(numero4);

//funciones

function suma(numero1, numero2) {
  return numero1 + numero2;
}
//plantillas de strings
console.log(`el resultado de la suma es ${suma(1, 2)} ...`);
console.log("el resultado de la suma es " + suma(1, 2) + " ...");

const resta = function (a, b) {
  return a - b;
};

const multicacion = (a, b) => {
  console.log(a * b);
};

console.log("la resta:", resta(5, 4));
multicacion(2, 2);

//estructuras

const nombres = ["jhon", "juan", "jose"];
const listaNumeros = [10, 2, 3, 4, 5, 6];
console.log(nombres);
const apellidos = new Array();
apellidos.push("mendez");
apellidos.push("garcia");
apellidos.push("lopez");
console.log(apellidos);

//ciclos
for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}

for (numero in listaNumeros) {
  console.log(numero);
}
for (numero of listaNumeros) {
  console.log(numero);
}
for (nombre of nombres) {
  console.log(nombre);
}
let bandera = true;
while (bandera) {
  console.log("ciclo while");
  bandera = false;
}
do {
  console.log("ingreso a dowhile");
} while (bandera);

//funciones arrays
console.log("lista antigua", listaNumeros);

const listaNumerosNueva = listaNumeros.map((numero) => {
  let doble = numero * numero;
  return doble;
});
console.log("lista nueva", listaNumerosNueva);

nombres.forEach((nombre) => {
  console.log("nombre: 🐰", nombre, "-");
});

const nombresEmoji = nombres.join(" 👩🏼 ");
console.log(nombresEmoji);

//reduce
const listaSuma = listaNumeros.reduce((acumulador, numero) => {
  return acumulador + numero;
}, 0);

console.log("la suma de reduccion es ", listaSuma);

//objetos
const persona = {
  nombre: "jhon",
  apellido: "mendez",
};

console.log(persona["nombre"]);
console.log(persona.apellido);

const animal = new Object();
animal.nombre = "magie";
animal.edad = 12;

console.log(animal.edad);

//ejemplo de objetos, listas y funciones de arrays
const personas = [
  { nombre: "juan", edad: 10 },
  { nombre: "pedro", edad: 20 },
  { nombre: "felipe", edad: 45 },
  { nombre: "marcela", edad: 50 },
  { nombre: "maria", edad: 10, apellidos: "mendez" },
];

const promedioEdades = personas
  .map((persona) => {
    return persona.edad;
  })
  .reduce((acc, edad) => {
    return acc + edad / personas.length;
  }, 0);

console.log(promedioEdades);

//busqueda,
//find: el primer elemento que coincida
//filter: los elementos que coincidan

const buscarNombre = personas.find((persona) => (persona.nombre = "jose"));
console.log(buscarNombre);

const buscarEdad = personas.filter((persona) => persona.edad > 20);
console.log(buscarEdad);

//objetos estructurados

class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  mostrarDatos() {
    return `me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`;
  }
}

const persona1 = new Persona("jhon", "mendez", 45);
const persona2 = new Persona();
persona2.nombre = "felipe";
persona2.apellido = "restrepo";
persona2.edad = 50;

const arrayPersonas = [persona1, persona2];

console.log(arrayPersonas, arrayPersonas[0].nombre);

arrayPersonas.forEach((persona) => {
  console.log(persona.edad);
});
