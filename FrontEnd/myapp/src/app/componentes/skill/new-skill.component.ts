import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SskillService } from 'src/app/service/sskill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {

  nombreSkill: string = "";
  descripcionSkill: string = "";
  img: string = "";
  percent!: number;

  constructor(private sSkillService: SskillService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const skillsLista = new Skill(this.nombreSkill, this.descripcionSkill, this.img, this.percent);
    this.sSkillService.save(skillsLista).subscribe(data =>{
      alert("Habilidad añadida");
      this.router.navigate([""]);
    }, err =>{
      alert("Falló");
      this.router.navigate([""]);
    })
  }

}
