import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillComponent } from './componentes/skill/skill.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { NewSkillComponent } from './componentes/skill/new-skill.component';
import { EditSkillComponent } from './componentes/skill/edit-skill.component';


const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"login", component: LoginComponent},
  {path:"exp", component: ExperienciaComponent},
  {path: "nuevaexp", component: NewExperienciaComponent},
  {path: "editexp/:id", component: EditExperienciaComponent},
  {path:"edu", component: EducacionComponent},
  {path: "nuevaedu", component: NewEducacionComponent},
  {path: "editedu/:id", component: EditEducacionComponent},
  {path:"skills", component: SkillComponent},
  {path: "nuevaskill", component: NewSkillComponent},
  {path: "editskill/:id", component: EditSkillComponent},
  {path:"projects", component: ProyectosComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
