import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { Persona } from 'src/main';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  @Input()
  persona: Persona = {} as Persona;

  @Output()
  updatePersona = new EventEmitter<Persona>();
  modificarPersona: boolean= false;

  sesionIniciada:boolean=false;
  
  

  ngOnInit() {
    this.loginService.onToggle().subscribe((sesionIniciada)=>{
        this.modificarPersona=sesionIniciada;
        this.sesionIniciada=sesionIniciada;
    });
  }

  constructor(private loginService: LoginService, private router:Router){
    this.sesionIniciada=false;
  }

  togglePersona(){
    this.modificarPersona = !this.modificarPersona;
  }

  guardarPersona(per: Persona){
    this.updatePersona.emit(per);
    this.modificarPersona = false;
  }
  editarFoto(){
    this.router.navigate(['header']);
  }

}
