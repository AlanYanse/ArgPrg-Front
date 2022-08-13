// Para crear las clases hay que hacer ng generate class classname porque sino Angular se crashea
export class Persona {

    id?: number;
    nombre: string;
    apellido: string;
    imagen: string;

    constructor(nombre: string, apellido: string, imagen: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.imagen = imagen;
    }
}
