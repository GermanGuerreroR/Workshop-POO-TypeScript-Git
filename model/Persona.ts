
export class Persona {
    constructor(public nombre: string, private edad: number) {
    }
    saludar(): void {
        console.log(`Tú nombre es ${this.nombre} y tienes ${this.edad} años`);
    }

    getEdad() {
        return this.edad;
    }
}