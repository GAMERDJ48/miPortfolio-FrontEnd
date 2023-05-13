import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faPen, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import {environment } from 'src/main';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-button-crud',
  templateUrl: './button-crud.component.html',
  styleUrls: ['./button-crud.component.css'],
})
export class ButtonCrudComponent {
  @Input()
  opcion: String = '';

  @Input()
  objetoUrl: String = '';

  sesionIniciada: boolean = false;
  faIcon = faPen;

  constructor(
    private router: Router,
    private http: HttpClient,
    private loginService: LoginService
  ) {
    this.sesionIniciada=this.loginService.comprobarInicio();
    
  }

  ngOnInit() {
    this.loginService.onToggle().subscribe(()=>{
      this.sesionIniciada=this.loginService.comprobarInicio();
      this.router.navigate(['']);
    });
    switch (this.opcion) {
      case 'delete':
        this.faIcon = faTrash;
        break;
      case 'create':
        this.faIcon = faPlus;
        break;
      case 'edit':
        this.faIcon = faPen;
        break;
    }
  }

  eliminar() {
    const url = environment.API_URL + '/' + this.objetoUrl;
    console.log(url);
    this.http.delete(url).subscribe((response) => {
      console.log('El objeto ha sido eliminado');
      location.reload();
      
    });
    
  }
}
