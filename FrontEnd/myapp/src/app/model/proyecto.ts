

export class Proyecto{

    id?: number;
    nombreProyecto: string;
    descripcionProyecto: string;
    imagen: string;
    enlace: string;

    constructor(nombreProyecto: string, descripcionProyecto: string, imagen: string, enlace: string){

        this.nombreProyecto = nombreProyecto;
        this.descripcionProyecto = descripcionProyecto;
        this.imagen = imagen;
        this.enlace = enlace;
        

    }
}