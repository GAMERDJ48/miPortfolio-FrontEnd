import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HabilidadService } from 'src/app/service/habilidad.service';
import { Habilidad, Persona } from 'src/main';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent {
  edicion: number = -1;
  @Input()
  habilidades: Habilidad[]=[];

  constructor(private habilidadService: HabilidadService){}
  toggleEditar(edicion: number) {
    this.edicion = edicion;
  }

  guardar(habilidad: Habilidad) {
    this.edicion = -1;
    this.habilidadService.update(habilidad.id, habilidad).subscribe();
  }
}
