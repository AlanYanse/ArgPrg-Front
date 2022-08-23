export class Skill{

    // Atributos

    id?: number;
    nombreSkill: string;
    descripcionSkill: string;
    img: string;
    percent: number;

    constructor(nombreSkill: string, descripcionSkill: string, img: string, percent: number){

        this.nombreSkill = nombreSkill;
        this.descripcionSkill = descripcionSkill;
        this.img = img;
        this.percent = percent;
    }

}