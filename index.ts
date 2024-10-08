import * as fs from 'fs';
import { Empleado } from "./model/Empleado";
import { Persona, EstadoCivil } from "./model/Persona";
import { Direccion } from "./interfaces/Direccion";
import { Vehiculo, Coche, Moto } from "./model/Vehiculo";
import { json } from 'stream/consumers';
import { Empresa } from './model/Empresa-';
import { Proyecto } from './model/Proyecto';
import { Departamento } from './model/Departamento';

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

const persona = new Persona({ nombre: "Walter White", direccion: { calle: "308 de Negra Arroyo Lane", ciudad: "Albuquerque", pais: "EEUU" }, vehiculos: [bmw, ferrari, suburban], estadoCivil: EstadoCivil.Casado }, 55,);
const personaUno = new Persona({ nombre: "Saul Goodman", direccion: { calle: "308 de Negra Arroyo Lane", ciudad: "Albuquerque", pais: "EEUU" }, vehiculos: [bmw, ducati], estadoCivil: EstadoCivil.Soltero }, 42);
const personaDos = new Persona({ nombre: "Jesse Pinkman", direccion: { calle: "308 de Negra Arroyo Lane", ciudad: "Albuquerque", pais: "EEUU" }, vehiculos: [yamaha, ducati], estadoCivil: EstadoCivil.Soltero }, 31);
const personaTres = new Persona({ nombre: "Gus Fring", direccion: { calle: "308 de Negra Arroyo Lane", ciudad: "Albuquerque", pais: "EEUU" }, vehiculos: [bmw, apriliaRS], estadoCivil: EstadoCivil.Soltero }, 59);
const personaCuatro = new Persona({ nombre: "Elba lazo", direccion: { calle: "308 de Negra Arroyo Lane", ciudad: "Albuquerque", pais: "EEUU" }, vehiculos: [ferrari, yamaha], estadoCivil: EstadoCivil.Soltero }, 29,);
const personaQuinta = new Persona({ nombre: "Elza pato", direccion: { calle: "308 de Negra Arroyo Lane", ciudad: "Albuquerque", pais: "EEUU" }, vehiculos: [suburban, ducati], estadoCivil: EstadoCivil.Soltero }, 30);
const personaSexta = new Persona({ nombre: "Juancho Carrancho", direccion: { calle: "308 de Negra Arroyo Lane", ciudad: "Albuquerque", pais: "EEUU" }, vehiculos: [yamaha, bmw], estadoCivil: EstadoCivil.Soltero }, 31,);
const personaSeptima = new Persona({ nombre: "Hank Schrader", direccion: { calle: "308 de Negra Arroyo Lane", ciudad: "Albuquerque", pais: "EEUU" }, vehiculos: [kawasakiNx, apriliaRS], estadoCivil: EstadoCivil.Soltero }, 57);
const personaOctava = new Persona({ nombre: "Thrall shaman supremo", direccion: { calle: "308 de Negra Arroyo Lane", ciudad: "Albuquerque", pais: "EEUU" }, vehiculos: [nissanGTR, ducati], estadoCivil: EstadoCivil.Soltero }, 33);
const personaNovena = new Persona({ nombre: "Elvis Tek", direccion: { calle: "308 de Negra Arroyo Lane", ciudad: "Albuquerque", pais: "EEUU" }, vehiculos: [suburban, apriliaRS], estadoCivil: EstadoCivil.Soltero }, 34,);


arrPersonas.push(persona, personaUno, personaDos, personaTres, personaCuatro, personaQuinta, personaSexta, personaSeptima, personaOctava, personaNovena);


for (let persona of arrPersonas) {
    persona.saludar();
}


// //Punto nro # 4

console.log(persona.getEdad());


//Punto nro # 5

const empleado = new Empleado(persona.infoPersona, persona.getEdad(), { salario: 500000, cargo: "Jefe" });

empleado.trabajar(6);

// Punto nro # 6

empleado.saludar();

// Punto nro # 7

const arrEmpleados: Empleado[] = [];

const empleadoCero = new Empleado(persona.infoPersona, persona.getEdad(), { salario: 500000, cargo: "Cocinero" });
const empleadoUno = new Empleado(personaUno.infoPersona, personaUno.getEdad(), { salario: 6500, cargo: "Cocinero" });
const empleadoDos = new Empleado(personaDos.infoPersona, personaDos.getEdad(), { salario: 7540, cargo: "Cocinero" });
const empleadoTres = new Empleado(personaTres.infoPersona, personaTres.getEdad(), { salario: 4781, cargo: "Cocinero" });
const empleadoCuatro = new Empleado(personaCuatro.infoPersona, personaCuatro.getEdad(), { salario: 5984, cargo: "Dev Backend" });
const empleadoQuinto = new Empleado(personaQuinta.infoPersona, personaQuinta.getEdad(), { salario: 5751, cargo: "Dev Backend" });
const empleadoSexto = new Empleado(personaSexta.infoPersona, personaSexta.getEdad(), { salario: 5757, cargo: "Dev Backend" });
const empleadoSeptimo = new Empleado(personaSeptima.infoPersona, personaSeptima.getEdad(), { salario: 4750, cargo: "Dev Backend" });
const empleadoOctavo = new Empleado(personaOctava.infoPersona, personaOctava.getEdad(), { salario: 5749, cargo: "Frontend Dev" });
const empleadoNoveno = new Empleado(personaNovena.infoPersona, personaNovena.getEdad(), { salario: 7899, cargo: "Frontend Dev" });



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


// const listaEmpleadosJSON = JSON.stringify(arrEmpleados, null, 2);
// fs.writeFileSync('./JSON/empleados.json', listaEmpleadosJSON, 'utf-8');


//Punto nro #13 

//Funcion para volverlos objetos

const JSONToObj = (): Empleado[] => {
    const empleadosFormatJSON = fs.readFileSync('./JSON/empleados.json', 'utf-8');
    return JSON.parse(empleadosFormatJSON);
}

//Funcion para volverlos JSON

const ObjToJson = (arr: any) => {
    fs.writeFileSync('./JSON/empleados.json', arr, 'utf-8');
    console.log("Convertidos en JSON!");
}

//ObjToJson(arrEmpleados); Convertir a las instancias de Empleado en formato JSON

//Punto nro #14

const personaNueva = new Persona({ nombre: "Pedro", direccion: { calle: "45 con septima", ciudad: "Bogota", pais: "Colombia" }, vehiculos: [bmw], estadoCivil: EstadoCivil.Casado }, 55)


//Punto nro #15

const empresaUno = new Empresa([]);

empresaUno.agregarEmpleado(empleadoCero);
empresaUno.agregarEmpleado(empleadoUno);
empresaUno.agregarEmpleado(empleadoDos);

try {
    empresaUno.eliminarEmpleado("pepe");
} catch (error: any) {
    error;
}

console.log(empresaUno.calcularTotalSalarios());


//Punto nro #16

const proyectoUno = new Proyecto([]);

console.log(proyectoUno.cocineros(empleado));

console.log(proyectoUno.cocineros(empleadoCero));

console.log(proyectoUno.devBack(empleadoDos));

console.log(proyectoUno.frontDev(empleadoOctavo));

console.log(proyectoUno.proyectoAltaIntensaidad(empleadoCuatro));


//Punto nro #17 

const departamentoCocina = new Departamento([]);


departamentoCocina.agregarEmpleado(empleadoDos);
departamentoCocina.agregarEmpleado(empleadoTres);

try {
    console.log(departamentoCocina.eliminarEmpleadoDepartamento("Lucas"));
} catch (error: any) {
    error;
}


departamentoCocina.listarDepartamento();

console.log(departamentoCocina.eliminarTodoDepartamento());

