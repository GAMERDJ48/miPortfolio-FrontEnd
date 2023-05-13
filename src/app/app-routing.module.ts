import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { ExperienciaFormComponent } from './components/forms/experiencia/experiencia-form.component';
import { FormacionFormComponent } from './components/forms/formacion/formacion-form.component';
import { ContactoFormComponent } from './components/forms/contacto/contacto-form.component';
import { LoginComponent } from './components/forms/login/login.component';
import { HeaderFormComponent } from './components/forms/header-form/header-form.component';
import { HabilidadFormComponent } from './components/forms/habilidad-form/habilidad-form.component';
import { ProyectoFormComponent } from './components/forms/proyecto-form/proyecto-form.component';

const routes: Routes = [
  {path:'',component:IndexComponent},
  {path:'experiencia/:id', component:ExperienciaFormComponent},
  {path:'experiencia', component:ExperienciaFormComponent},
  {path:'formacion/:id', component:FormacionFormComponent},
  {path:'formacion', component:FormacionFormComponent},
  {path:'contacto', component:ContactoFormComponent},
  {path:'contacto/:id', component:ContactoFormComponent},
  {path:'login', component:LoginComponent},
  {path:'header', component:HeaderFormComponent},
  {path:'habilidad', component:HabilidadFormComponent},
  {path:'proyecto/:id', component:ProyectoFormComponent},
  {path:'proyecto', component:ProyectoFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
