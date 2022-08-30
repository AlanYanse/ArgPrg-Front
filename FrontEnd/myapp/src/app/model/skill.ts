export class Skill{

    // Atributos

    id?: number;
    nombreSkill: string;
    descripcionSkill: string;
    img: string;
    colorBarrita: string;
    percent: number;

    constructor(nombreSkill: string, descripcionSkill: string, img: string, colorBarrita: string, percent: number){

        this.nombreSkill = nombreSkill;
        this.descripcionSkill = descripcionSkill;
        this.img = img;
        this.colorBarrita = colorBarrita;
        this.percent = percent;
    }

}