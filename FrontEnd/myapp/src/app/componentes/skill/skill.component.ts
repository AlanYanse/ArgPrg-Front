import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SskillService } from 'src/app/service/sskill.service';
import { TokenService } from 'src/app/service/token.service';



@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  isLogged = false;
  skillsLista: Skill[] = [];

  constructor(private sSkillService: SskillService, private tokenService: TokenService) { }

  cargarSkills() {
    this.sSkillService.lista().subscribe(
      (data) => {
        this.skillsLista = data;
      }
    );
  }

  reloadSkills() {
    this.sSkillService.lista().subscribe(
      (data) => {
        let a = alert("Reloading skills");
        if (a != null) {
          this.skillsLista = data;
          window.location.reload();
        }
      }
    );
  }

  onDeleteSkill(id?: number) {
    console.log(id);
    if (id != undefined) {
      this.sSkillService.delete(id)
        .subscribe(data => {
          this.cargarSkills();
          let a = alert("Skill Eliminada");
          if (a != null) {
            window.location.reload();
          } (error: any) => {
            this.cargarSkills();
            let b = alert("No se pudo eliminar la skill");
            if (b != null) {
              window.location.reload();
            }
          }
        }
      )
    }
  }

  onUpdateSkill(id?: number) {
    console.log(id);
    let skill = this.skillsLista.find(x => x.id == id);
    if (id != undefined && skill != undefined) {
      this.sSkillService.update(id, skill).subscribe(
        data => {
          this.cargarSkills();
          let a = alert("Skill modificada");
          if (a != null) {
            window.location.reload();
          } (error: any) => {
            this.cargarSkills();
            let b = alert("No se pudo modificar la skill");
            if (b != null) {
              window.location.reload();
            }
          }
        }
      )
    }
  }

  

  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }




}
