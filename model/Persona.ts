
export class Persona {
    constructor(public nombre: string, public edad: number) {
    }
    saludar(): void {
        console.log(`Tú nombre es ${this.nombre} y tienes ${this.edad} años`);
    }
}