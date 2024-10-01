import { Persona } from "./model/Persona";

const creacionJSON = () => {

    const personaJSON = { "infoPersona": { "nombre": "Homero Simpson", "direccion": { "calle": "742 de Evergreen Terrace ", "ciudad": "Springfield", "pais": "EEUU" } }, "edad": 37 }
    return JSON.stringify(personaJSON);
}


const creacionOBJ = (objJSON: any): Persona => {

    objJSON = JSON.parse(objJSON);

    return new Persona(objJSON.infoPersona, objJSON.edad);
}


//Llamo el método aparte para tener algo más de orden. Sin embargo arriba sería poner void y llamar directamente el método. 
creacionOBJ(creacionJSON()).saludar();

