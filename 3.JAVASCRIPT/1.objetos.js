//herencia
//polimorfismo
//encapsulacion: private, public

class Persona {
  #nombre;
  #edad;
  constructor(nombre, edad) {
    this.#nombre = nombre;
    this.#edad = edad;
  }

  getNombre() {
    return this.#nombre;
  }

  getEdad() {
    return this.#edad;
  }

  setNombre(nombre) {
    this.#nombre = nombre;
  }

  setEdad(edad) {
    this.#edad = edad;
  }

  obtenerDatos() {
    return `Me llamo ${this.#nombre}, y tengo: ${this.#edad} años`;
  }
}

class Estudiante extends Persona {
  constructor(nombre, edad, carrera) {
    super(nombre, edad);
    this.carrera = carrera;
  }

  obtenerDatos() {
    return `${super.obtenerDatos()} y estudio ${this.carrera}`;
  }
}

function Animal(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.obtenerDatos = function () {
    return `soy ${this.nombre} y tengo ${this.edad} años`;
  };
}

const persona1 = new Persona();
persona1.setNombre("jhon");
persona1.setEdad(45);
console.log(persona1.obtenerDatos());

const estudiante = new Estudiante();
estudiante.setNombre("felipe");
estudiante.setEdad(20);
estudiante.carrera = "ingenieria de sistemas";
console.log(estudiante.obtenerDatos());

const perro = new Animal("firulais", 5);
perro.ciudad = "bogota";
console.log(perro.obtenerDatos());
console.log(perro.ciudad);
