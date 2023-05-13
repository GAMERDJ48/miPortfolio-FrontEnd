import { Component, Input } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';
import { Habilidad, Persona } from 'src/main';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  estilo:string = "btn btn-primary";
  persona: Persona = {} as Persona;

  constructor(private personaService: PersonaService){}

  ngOnInit(){
    this.personaService.getPersona().subscribe(
      (persona) => (this.persona = persona)
    )
  }

  updatePersona(per:Persona){
    this.personaService.update(per.id, per).subscribe(
      (persona) => (this.persona = persona)
    )
  }
}
