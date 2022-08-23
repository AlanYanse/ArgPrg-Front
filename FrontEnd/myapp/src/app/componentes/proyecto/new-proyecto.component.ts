import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SproyectoService } from 'src/app/service/sproyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {

  nombreProyecto: string = "";
  descripcionProyecto: string = "";
  imagen!: string;

  constructor(private sProyectoService: SproyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proyectosLista = new Proyecto(this.nombreProyecto, this.descripcionProyecto, this.imagen);
    this.sProyectoService.save(proyectosLista).subscribe(data =>{
      alert("Proyecto añadido");
      this.router.navigate([""]);
    }, err =>{
      alert("Falló");
      this.router.navigate([""]);
    })
  }

}
