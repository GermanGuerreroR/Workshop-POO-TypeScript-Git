import { Persona } from "./model/Persona";


//Punto nro # 3
const arrPersonas: Persona[] = [];

const persona = new Persona("Walter White", 55);
const personaUno = new Persona("Saul Goodman", 42);
const personaDos = new Persona("Jesse Pinkman", 31);
const personaTres = new Persona("Gus Fring", 59);
const personaCuatro = new Persona("Elba lazo", 29);
const personaQuinta = new Persona("Elza pato", 30);
const personaSexta = new Persona("Juancho Carrancho", 31);
const personaSeptima = new Persona("Hank Schrader", 57);
const personaOctava = new Persona("Thrall shaman supremo", 33);
const personaNovena = new Persona("Elvis Tek", 34);


arrPersonas.push(persona, personaUno, personaDos, personaTres, personaCuatro, personaQuinta, personaSexta, personaSeptima, personaOctava, personaNovena);


for (let persona of arrPersonas) {
    persona.saludar();
}


//Punto nro # 4

console.log(persona.getEdad());