import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PersonaComponent } from './components/persona/persona.component';
import { HabilidadComponent } from './components/habilidad/habilidad.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FormsModule } from '@angular/forms';
import { ButtonCrudComponent } from './components/button-crud/button-crud.component';
import { ExperienciaFormComponent } from './components/forms/experiencia/experiencia-form.component';
import { FormacionFormComponent } from './components/forms/formacion/formacion-form.component';
import { ContactoFormComponent } from './components/forms/contacto/contacto-form.component';
import { LoginComponent } from './components/forms/login/login.component';
import { HeaderFormComponent } from './components/forms/header-form/header-form.component';
import { HabilidadFormComponent } from './components/forms/habilidad-form/habilidad-form.component';
import { ProyectoFormComponent } from './components/forms/proyecto-form/proyecto-form.component';
import { TecnologiaComponent } from './components/proyecto/tecnologia/tecnologia.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ContactoComponent,
    SideBarComponent,
    PersonaComponent,
    HabilidadComponent,
    FormacionComponent,
    ExperienciaComponent,
    ProyectoComponent,
    ButtonCrudComponent,
    ExperienciaFormComponent,
    FormacionFormComponent,
    ContactoFormComponent,
    LoginComponent,
    HeaderFormComponent,
    HabilidadFormComponent,
    ProyectoFormComponent,
    TecnologiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
