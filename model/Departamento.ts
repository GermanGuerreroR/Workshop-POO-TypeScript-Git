import { error } from "console";
import { Empleado } from "./Empleado";


export class Departamento {

    constructor(public deparamento: Empleado[]) { }


    agregarEmpleado(empleado: Empleado): void {
        this.deparamento.push(empleado);
    }

    eliminarEmpleadoDepartamento(nombre: string): Empleado[] {

        this.deparamento = this.deparamento.filter(x => x.infoPersona.nombre !== nombre);

        if (this.deparamento.length === this.deparamento.filter(x => x.infoPersona.nombre !== nombre).length) throw error("Nombre no encontrado en el departamento");

        return this.deparamento;


    }

    eliminarTodoDepartamento() {

        this.deparamento = [];

        return this.deparamento;

    }

    listarDepartamento(): void {

        for (let empleado of this.deparamento) {
            console.log(empleado);
        }
    }

}