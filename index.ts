import { Empleado } from "./model/Empleado";
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


//Punto nro # 5

const empleado = new Empleado(persona.nombre, persona.getEdad(), 500000000);

empleado.trabajar(6);

// Punto nro # 6

empleado.saludar();

//Punto nro # 7

const arrEmpleados: Empleado[] = [];

const empleadoCero = new Empleado("Pepe Luis", 25, 5000);
const empleadoUno = new Empleado("Luis Pepe", 26, 6500);
const empleadoDos = new Empleado("Lucas Pepe", 27, 7540);
const empleadoTres = new Empleado("Pepe Lucas", 28, 4781);
const empleadoCuatro = new Empleado("Elba lazo", 29, 5984);
const empleadoQuinto = new Empleado("Elza pato", 30, 5751);
const empleadoSexto = new Empleado("Juancho Carrancho", 31, 5757);
const empleadoSeptimo = new Empleado("Pepe Frijoles", 32, 4750);
const empleadoOctavo = new Empleado("Thrall shaman supremo", 33, 5749);
const empleadoNoveno = new Empleado("Elvis Tek", 34, 7899);

arrEmpleados.push(empleadoCero, empleadoUno, empleadoDos, empleadoTres, empleadoCuatro, empleadoQuinto, empleadoSexto, empleadoSeptimo, empleadoOctavo, empleadoNoveno);

for (let empleado of arrEmpleados) {
    empleado.saludar();
}