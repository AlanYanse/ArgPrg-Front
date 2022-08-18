import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component'; // Lo importó directamente vsc
import { ButtonComponent } from './componentes/button/button.component'; // Lo importó directamente vsc con un pequeño bug
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';  // Lo importó directamente vsc
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './componentes/about/about.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LogoApComponent } from './componentes/logo-ap/logo-ap.component';
import { SocialMediaComponent } from './componentes/social-media/social-media.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { SidenavComponent } from './componentes/sidenav/sidenav.component';
import { MenuBarComponent } from './componentes/menu-bar/menu-bar.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, // Lo registró automáticamente vsc
    ButtonComponent, // Lo registró automáticamente vsc
    AboutComponent, 
    FooterComponent, 
    LogoApComponent, 
    SocialMediaComponent, 
    BannerComponent, 
    ExperienciaComponent, 
    EducacionComponent, 
    SkillsComponent, 
    ProyectosComponent, 
    HomeComponent, 
    LoginComponent, NewExperienciaComponent, EditExperienciaComponent, NewEducacionComponent, EditEducacionComponent, SidenavComponent, MenuBarComponent // Lo registró automáticamente vsc
    
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
