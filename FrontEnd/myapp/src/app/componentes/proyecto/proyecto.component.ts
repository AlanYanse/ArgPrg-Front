import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { SproyectoService } from 'src/app/service/sproyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  isLogged = false;
  proyectosLista: Proyecto[] = [];

  constructor(private sProyectoService: SproyectoService, private tokenService: TokenService) { }

  cargarProyectos() {
    this.sProyectoService.lista().subscribe(
      (data) => {
        this.proyectosLista = data;
      }
    );
  }

  reloadProyectos() {
    this.sProyectoService.lista().subscribe(
      (data) => {
        let a = alert("Reloading proyectos");
        if (a != null) {
          this.proyectosLista = data;
          window.location.reload();
        }
      }
    );
  }

  onDeleteProyectos(id?: number) {
    console.log(id);
    if (id != undefined) {
      this.sProyectoService.delete(id)
        .subscribe(data => {
          this.cargarProyectos();
          let a = alert("Proyecto Eliminado");
          if (a != null) {
            window.location.reload();
          } (error: any) => {
            this.cargarProyectos();
            let b = alert("No se pudo eliminar el proyecto");
            if (b != null) {
              window.location.reload();
            }
          }
        }
      )
    }
  }

  onUpdateProyectos(id?: number) {
    console.log(id);
    let proyecto = this.proyectosLista.find(x => x.id == id);
    if (id != undefined && proyecto != undefined) {
      this.sProyectoService.update(id, proyecto).subscribe(
        data => {
          this.cargarProyectos();
          let a = alert("Proyecto modificado");
          if (a != null) {
            window.location.reload();
          } (error: any) => {
            this.cargarProyectos();
            let b = alert("No se pudo modificar el proyecto");
            if (b != null) {
              window.location.reload();
            }
          }
        }
      )
    }
  }


  ngOnInit(): void {
    this.cargarProyectos();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

}
