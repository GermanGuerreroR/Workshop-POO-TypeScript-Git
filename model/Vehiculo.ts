export abstract class Vehiculo {
    arrancar(): void { };
}

class Coche extends Vehiculo {
    arrancar(): void {
        console.log("Coche arrancando....");
    }
}

class Moto extends Vehiculo {
    arrancar(): void {
        console.log("Moto arrancando....");
    }
}


