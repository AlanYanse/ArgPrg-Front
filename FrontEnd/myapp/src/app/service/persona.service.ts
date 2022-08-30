import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';



@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //Deploy https://mibackend.herokuapp.com/personas/
  URL: string = "http://localhost:8080/personas/";
  

  constructor(private http: HttpClient) { 


  }

  public getPersona(): Observable <Persona>{

    return this.http.get<Persona>(this.URL + "traer/perfil"); // De donde sale este http??

  }

}
