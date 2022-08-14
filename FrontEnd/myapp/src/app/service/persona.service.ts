import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';



@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL: string = "https://mibackend.herokuapp.com/personas/";
  

  constructor(private http: HttpClient) { 


  }

  public getPersona(): Observable <Persona>{

    return this.http.get<Persona>(this.URL + "traer/perfil"); // De donde sale este http??

  }

}
