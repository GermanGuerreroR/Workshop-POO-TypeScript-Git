import { Empleado } from "./Empleado";

export class Proyecto {

    constructor(public proyecto: Empleado[]) {

    }


    devBack(cargoEmpleado: Empleado): Empleado[] {

        const arr: Empleado[] = [];
        if (cargoEmpleado.infoLaboral.cargo === "Dev Backend") arr.push(cargoEmpleado);
        return arr;
    }

    cocineros(cargoEmpleado: Empleado): Empleado[] {

        const arr: Empleado[] = [];
        if (cargoEmpleado.infoLaboral.cargo === "Cocinero") arr.push(cargoEmpleado);
        return arr;
    }

    frontDev(cargoEmpleado: Empleado): Empleado[] {

        const arr: Empleado[] = [];
        if (cargoEmpleado.infoLaboral.cargo === "Frontend Dev") arr.push(cargoEmpleado);
        return arr;
    }

    proyectoAltaIntensaidad(cargoEmpleado: Empleado) {
        const arr: Empleado[] = [];
        if (cargoEmpleado.getEdad() <= 30) arr.push(cargoEmpleado);
        return arr;
    }


}