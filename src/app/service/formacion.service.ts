import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formacion } from 'src/main';
import { environment } from 'src/main';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class FormacionService {
  
  objeto:String="formacion";

  apiUrl: string = environment.API_URL+'/'+this.objeto;
  constructor(private http: HttpClient) {}

  getAll() : Observable<Formacion[]>{
    return this.http.get<Formacion[]>(this.apiUrl);
  }

  getOne(id:number) : Observable<Formacion>{
    return this.http.get<Formacion>(`${this.apiUrl}/${id}`);
  }

  save(entity:Formacion): Observable<Formacion> {
    return this.http.post<Formacion>(this.apiUrl, entity);
  }

  update(id:number, entity:Formacion): Observable<Formacion>{
    return this.http.put<Formacion>(`${this.apiUrl}/${id}`,entity);
  }

  delete(id:number){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
