import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { Usuario } from 'src/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    constructor(private loginService: LoginService, private router:Router){}

    usuario:Usuario={} as Usuario;

    incorrecto:boolean=false;

    username:string="";
    password:string="";

    ngOnInit(){
        this.loginService.getUsuario().subscribe((usuario)=>{
          this.usuario=usuario;
        });

        this.loginService.onToggle().subscribe(()=>{
          this.router.navigate(['']);
        });

    }

    ingresar(){
      if(this.usuario.username==this.username && this.usuario.password==this.password){
          this.iniciarSesion();
      }else{
        this.incorrecto=true;
      }
    }

    iniciarSesion(){
      this.loginService.iniciarSesion()  
    }


}
