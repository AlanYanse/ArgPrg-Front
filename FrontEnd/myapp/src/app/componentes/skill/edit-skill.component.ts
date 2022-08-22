import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SskillService } from 'src/app/service/sskill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  skill!: Skill;

  constructor(private sSkillService: SskillService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    const id = this.activatedRouter.snapshot.params["id"];
    this.sSkillService.detail(id).subscribe(data =>{
      this.skill = data;
    }, err =>{
      alert("Error al modificar la Habilidad");
      this.router.navigate([""]);
    })
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params["id"];
    this.sSkillService.update(id, this.skill).subscribe(data =>{
      this.router.navigate([""]);
    }, err =>{
      alert("Error al modificar la habilidad");
      this.router.navigate([""]);
    })
  }


}
