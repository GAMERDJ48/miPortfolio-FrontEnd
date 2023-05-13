import { Component, Input } from '@angular/core';
import { Contacto } from 'src/main';
import { LoginService } from 'src/app/service/login.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {
  @Input()
  contactos: Contacto[] = [];
  
  sesionIniciada:boolean=false;
  subscription?: Subscription;

  ngOnInit() {
    this.sesionIniciada=this.login.comprobarInicio();
  }

  constructor(private login: LoginService, private router: Router) {
    this.subscription = this.login.onToggle().subscribe(
      (sesionIniciada) => {this.sesionIniciada = sesionIniciada;}
    );
  }

  iniciarSesion() {
    this.router.navigate(['/login']);
  }
  cerrarSesion() {
    this.login.cerrarSesion();
  }
}
