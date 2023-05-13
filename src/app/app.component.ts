import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonaService } from './service/persona.service';
import { Persona } from 'src/main';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-front';
  persona: Persona = {} as Persona;

  constructor(private personaService: PersonaService){}

  ngOnInit(){
    this.personaService.getPersona().subscribe(
      (persona) => (this.persona = persona)
    )
  
  }

}
