import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/sexperiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  expe: Experiencia[] = [];
  isLogged: boolean = false;

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }

  cargarExperiencia(): void{
    this.sExperiencia.lista().subscribe(data =>{
      this.expe = data;
    })
  }

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  onDelete(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(data =>{
        this.cargarExperiencia();
      }, err =>{
        alert("No se pudo borrar la experiencia");
      })
    }
  }

}
