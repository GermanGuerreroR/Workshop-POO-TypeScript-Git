import * as fs from 'fs';
import { Empleado } from "./model/Empleado";
import { Persona } from "./model/Persona";
import { Direccion } from "./interfaces/Direccion";
import { Vehiculo, Coche, Moto } from "./model/Vehiculo";
import { json } from 'stream/consumers';

// //Punto nro # 3 y Punto nro # 11

const arrPersonas: Persona[] = [];

const bmw = new Coche("bmw B3", 2021);
const ferrari = new Coche("Ferrari Spider", 2018);
const suburban = new Coche("Suburban cadilac", 2024);
const nissanGTR = new Coche("Nissa GTR turbo", 1997);

const yamaha = new Moto("Yamaha R6", 2024);
const ducati = new Moto("Ducati Italia", 1990);
const apriliaRS = new Moto("Aprilla Racing Stack", 2020);
const kawasakiNx = new Moto("Kawasaki NX", 2021);

const persona = new Persona({ nombre: "Walter White", direccion: { calle: "308 de Negra Arroyo Lane", ciudad: "Albuquerque", pais: "EEUU" }, vehiculos: [bmw, ferrari, suburban] }, 55,);
const personaUno = new Persona({ nombre: "Saul Goodman", direccion: { calle: "308 de Negra Arroyo Lane", ciudad: "Albuquerque", pais: "EEUU" }, vehiculos: [bmw, ducati] }, 42);
const personaDos = new Persona({ nombre: "Jesse Pinkman", direccion: { calle: "308 de Negra Arroyo Lane", ciudad: "Albuquerque", pais: "EEUU" }, vehiculos: [yamaha, ducati] }, 31);
const personaTres = new Persona({ nombre: "Gus Fring", direccion: { calle: "308 de Negra Arroyo Lane", ciudad: "Albuquerque", pais: "EEUU" }, vehiculos: [bmw, apriliaRS] }, 59);
const personaCuatro = new Persona({ nombre: "Elba lazo", direccion: { calle: "308 de Negra Arroyo Lane", ciudad: "Albuquerque", pais: "EEUU" }, vehiculos: [ferrari, yamaha] }, 29,);
const personaQuinta = new Persona({ nombre: "Elza pato", direccion: { calle: "308 de Negra Arroyo Lane", ciudad: "Albuquerque", pais: "EEUU" }, vehiculos: [suburban, ducati] }, 30);
const personaSexta = new Persona({ nombre: "Juancho Carrancho", direccion: { calle: "308 de Negra Arroyo Lane", ciudad: "Albuquerque", pais: "EEUU" }, vehiculos: [yamaha, bmw] }, 31,);
const personaSeptima = new Persona({ nombre: "Hank Schrader", direccion: { calle: "308 de Negra Arroyo Lane", ciudad: "Albuquerque", pais: "EEUU" }, vehiculos: [kawasakiNx, apriliaRS] }, 57);
const personaOctava = new Persona({ nombre: "Thrall shaman supremo", direccion: { calle: "308 de Negra Arroyo Lane", ciudad: "Albuquerque", pais: "EEUU" }, vehiculos: [nissanGTR, ducati] }, 33);
const personaNovena = new Persona({ nombre: "Elvis Tek", direccion: { calle: "308 de Negra Arroyo Lane", ciudad: "Albuquerque", pais: "EEUU" }, vehiculos: [suburban, apriliaRS] }, 34,);


arrPersonas.push(persona, personaUno, personaDos, personaTres, personaCuatro, personaQuinta, personaSexta, personaSeptima, personaOctava, personaNovena);


for (let persona of arrPersonas) {
    persona.saludar();
}


// //Punto nro # 4

console.log(persona.getEdad());


//Punto nro # 5

const empleado = new Empleado(persona.infoPersona, persona.getEdad(), 5000000);

empleado.trabajar(6);

// Punto nro # 6

empleado.saludar();

// Punto nro # 7

const arrEmpleados: Empleado[] = [];

const empleadoCero = new Empleado(persona.infoPersona, persona.getEdad(), 5000);
const empleadoUno = new Empleado(personaUno.infoPersona, personaUno.getEdad(), 6500);
const empleadoDos = new Empleado(personaDos.infoPersona, personaDos.getEdad(), 7540);
const empleadoTres = new Empleado(personaTres.infoPersona, personaTres.getEdad(), 4781);
const empleadoCuatro = new Empleado(personaCuatro.infoPersona, personaCuatro.getEdad(), 5984);
const empleadoQuinto = new Empleado(personaQuinta.infoPersona, personaQuinta.getEdad(), 5751);
const empleadoSexto = new Empleado(personaSexta.infoPersona, personaSexta.getEdad(), 5757);
const empleadoSeptimo = new Empleado(personaSeptima.infoPersona, personaSeptima.getEdad(), 4750);
const empleadoOctavo = new Empleado(personaOctava.infoPersona, personaOctava.getEdad(), 5749);
const empleadoNoveno = new Empleado(personaNovena.infoPersona, personaNovena.getEdad(), 7899);

arrEmpleados.push(empleadoCero, empleadoUno, empleadoDos, empleadoTres, empleadoCuatro, empleadoQuinto, empleadoSexto, empleadoSeptimo, empleadoOctavo, empleadoNoveno);

for (let empleado of arrEmpleados) {
    empleado.saludar();
}


// Punto nro # 8 {Incluyo una modificación en las clases y en cada instancia generada}

for (let persona of arrPersonas) {

    persona.obtenerDireccion();
}


for (let empleado of arrEmpleados) {

    empleado.obtenerDireccion();
}

//Punto nro #9 se exporta la primera instancia creada de persona


//Punto nro #12 agrego dos atributos a la clase Vehiculo para facilitar la serialización de las instancias de empleado. 

console.log(empleado.infoPersona.vehiculos);


const listaEmpleadosJSON = JSON.stringify(arrEmpleados, null, 2);
fs.writeFileSync('./JSON/empleados.json', listaEmpleadosJSON, 'utf-8');