import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/service/persona.service';
import { Persona } from 'src/main';

@Component({
  selector: 'app-header-form',
  templateUrl: './header-form.component.html',
  styleUrls: ['./header-form.component.css']
})
export class HeaderFormComponent {
    
  persona:Persona={} as Persona;
  

  constructor( 
    private personaService:PersonaService, 
    private router:Router){}


  ngOnInit() {
    
    this.personaService.getPersona().subscribe(
      (persona) => {
        this.persona = persona;
      }
    )
  }

  onSubmit() {
    this.personaService.update(this.persona.id,this.persona).subscribe(()=>{{this.router.navigate(['']);}});
    
  }

}
