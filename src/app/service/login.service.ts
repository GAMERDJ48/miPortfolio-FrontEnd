import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Usuario } from 'src/interfaces';
import { environment } from 'src/main';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  apiUrl: string = environment.API_URL+'/usuario/1';

  constructor(private http: HttpClient) {}
  
  sesionIniciada:boolean=false;

  private subject=new Subject();

  getUsuario(): Observable<Usuario> {
    return this.http.get<Usuario>(this.apiUrl);
  }

  iniciarSesion(){
    this.sesionIniciada=!this.sesionIniciada;
    localStorage.setItem('myAppSessionToken', 'mi-token-de-sesion');
    this.subject.next(this.sesionIniciada);
  }
  cerrarSesion(){
    this.sesionIniciada=false;
    localStorage.removeItem('myAppSessionToken');
    this.subject.next(this.sesionIniciada);
  }
  onToggle():Observable<any>{
    return this.subject.asObservable(); 
  }

  comprobarInicio(): boolean {
    return !!localStorage.getItem('myAppSessionToken');
  }

}
