import { Persona } from "./Persona";
import { Direccion } from "../interfaces/Direccion";

export class Empleado extends Persona {
    constructor(infoPersona: { nombre: string, direccion: Direccion }, edad: number, public salario: number) {
        super(infoPersona, edad);
    }

    override saludar(): void {
        console.log(`Tú nombre es ${this.infoPersona.nombre} y tienes ${this.getEdad()} años \n y el salario es de $${this.salario}`);
    }

    trabajar(horasTrabajadas: number): void {
        const dias: { [key: number]: string } = {
            0: "domingo",
            1: "lunes",
            2: "martes",
            3: "miercoles",
            4: "jueves",
            5: "viernes",
            6: "sábado",
        }
        console.log(`El día ${dias[new Date().getDay()]} usted trabajo ${horasTrabajadas} horas. `);
    }
}
