import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidad } from 'src/main';
import { HabilidadService } from 'src/app/service/habilidad.service';

@Component({
  selector: 'app-habilidad-form',
  templateUrl: './habilidad-form.component.html',
  styleUrls: ['./habilidad-form.component.css']
})
export class HabilidadFormComponent {
  habilidad: Habilidad={} as Habilidad;

  constructor(private habilidadService: HabilidadService, private router: Router){}
  
  ngOnInit() {
    this.habilidad = new Habilidad();
  }

  onSubmit() {
    this.habilidadService.save(this.habilidad).subscribe(()=>{this.router.navigate(['']);});
  }
  
}
