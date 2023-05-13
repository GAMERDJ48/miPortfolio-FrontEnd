import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.css']
})
export class TecnologiaComponent {
  @Input()
  tecnologia:string="";
  icono:string="fa-brands ";

  ngOnInit() {
    switch(this.tecnologia.toLowerCase()){
      case("java"): this.icono = this.icono+"fa-java"; break;
      case("angular"): this.icono = this.icono+"fa-angular"; break;
      case("bootstrap"): this.icono = this.icono+"fa-bootstrap"; break;
      default: this.icono="";
    }
  }
}
