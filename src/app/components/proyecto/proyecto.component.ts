import { Component, Input } from '@angular/core';
import { Proyecto } from 'src/main';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent {

  @Input()
  proyectos: Proyecto[] = [];

}
