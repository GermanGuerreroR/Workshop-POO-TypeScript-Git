import { error } from "console";
import { Empleado } from "./Empleado";


export class Empresa {

    constructor(public empleadosEmpresa: Empleado[]) { }

    agregarEmpleado(empleado: Empleado): void {
        this.empleadosEmpresa.push(empleado);
    }

    eliminarEmpleado(nombre: string): Empleado[] {
        if (this.empleadosEmpresa.filter(x => x.infoPersona.nombre !== nombre).length === this.empleadosEmpresa.length) throw error(`No hay registros con el nombre ${nombre}`);
        return this.empleadosEmpresa = (this.empleadosEmpresa.filter(x => x.infoPersona.nombre !== nombre));
    }

    calcularTotalSalarios(): number {
        let total = 0;
        for (let i = 0; i < this.empleadosEmpresa.length; i++) {
            total += this.empleadosEmpresa[i].infoLaboral.salario
        }
        return total;
    }

}