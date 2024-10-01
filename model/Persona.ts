import { Direccion } from "../interfaces/Direccion";

export class Persona {
    constructor(public infoPersona: { nombre: string, direccion: Direccion }, private edad: number) { };

    saludar(): void {
        console.log(`Tú nombre es ${this.infoPersona.nombre} y tienes ${this.edad} años`);
    }

    getEdad() {
        return this.edad;
    }

    obtenerDireccion(): void {

        const { calle, ciudad, pais } = this.infoPersona.direccion;

        console.log(`La dirección de ${this.infoPersona.nombre} es : \n Calle: ${calle} \n Ciudad: ${ciudad}\n Pais: ${pais}`);
    }
}