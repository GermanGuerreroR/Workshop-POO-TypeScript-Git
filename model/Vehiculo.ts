export abstract class Vehiculo {

    constructor(public marca: string, public modelo: number) { }


    arrancar(): void { };
}

export class Coche extends Vehiculo {
    arrancar(): void {
        console.log("Coche arrancando....");
    }
}

export class Moto extends Vehiculo {
    arrancar(): void {
        console.log("Moto arrancando....");
    }
}


