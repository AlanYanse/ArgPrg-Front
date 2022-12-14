import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SproyectoService } from 'src/app/service/sproyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {

  proyecto!: Proyecto;

  constructor(private sProyectoService: SproyectoService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    const id = this.activatedRouter.snapshot.params["id"];
    this.sProyectoService.detail(id).subscribe(data =>{
      this.proyecto = data;
    }, err =>{
      alert("Error al modificar el proyecto");
      this.router.navigate(["proyectos"]);
    })
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params["id"];
    this.sProyectoService.update(id, this.proyecto).subscribe(data =>{
      this.router.navigate(["proyectos"]);
    }, err =>{
      alert("Error al modificar el proyecto");
      this.router.navigate(["proyectos"]);
    })
  }


}
