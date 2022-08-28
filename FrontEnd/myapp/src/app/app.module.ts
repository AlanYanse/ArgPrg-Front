import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component'; // Lo importó directamente vsc
import { ButtonComponent } from './componentes/button/button.component'; // Lo importó directamente vsc con un pequeño bug
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';  // Lo importó directamente vsc
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './componentes/about/about.component';
import { LogoApComponent } from './componentes/logo-ap/logo-ap.component';
import { SocialMediaComponent } from './componentes/social-media/social-media.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillComponent } from './componentes/skill/skill.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { MenuBarComponent } from './componentes/menu-bar/menu-bar.component';
import { NewSkillComponent } from './componentes/skill/new-skill.component';
import { EditSkillComponent } from './componentes/skill/edit-skill.component';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { NewProyectoComponent } from './componentes/proyecto/new-proyecto.component';
import { EditProyectoComponent } from './componentes/proyecto/edit-proyecto.component';
import { FormContactComponent } from './componentes/form-contact/form-contact.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, // Lo registró automáticamente vsc
    ButtonComponent, // Lo registró automáticamente vsc
    AboutComponent,  
    LogoApComponent, 
    SocialMediaComponent,  
    ExperienciaComponent, 
    EducacionComponent, 
    SkillComponent,  
    HomeComponent, 
    LoginComponent, 
    NewExperienciaComponent, 
    EditExperienciaComponent, 
    NewEducacionComponent, 
    EditEducacionComponent, 
    MenuBarComponent, 
    NewSkillComponent, 
    EditSkillComponent, 
    ProyectoComponent, 
    NewProyectoComponent, 
    EditProyectoComponent, 
    FormContactComponent // Lo registró automáticamente vsc
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    FontAwesomeModule, // Lo registró automáticamente vsc
    AppRoutingModule,
    RouterModule,
    HttpClientModule, 
    AppRoutingModule
    
  ],
  providers: [
    interceptorProvider
  ],
  
  bootstrap: [AppComponent] // Acá está bootstrap
  
})
export class AppModule { }
