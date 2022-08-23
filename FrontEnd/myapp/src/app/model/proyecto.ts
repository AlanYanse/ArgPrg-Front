

export class Proyecto{

    id?: number;
    nombreProyecto: string;
    descripcionProyecto: string;
    imagen: string;

    constructor(nombreProyecto: string, descripcionProyecto: string, imagen: string){

        this.nombreProyecto = nombreProyecto;
        this.descripcionProyecto = descripcionProyecto;
        this.imagen = imagen;
        

    }
}