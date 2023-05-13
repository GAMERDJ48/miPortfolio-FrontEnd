import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from 'src/main';
import { environment } from 'src/main';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class PersonaService {


  apiUrl: string = environment.API_URL+'/persona';
  constructor(private http: HttpClient) {}

  getPersona(): Observable<Persona> {
    return this.http.get<Persona>(this.apiUrl);
  }

  update(id:number, entity:Persona): Observable<Persona>{
    return this.http.put<Persona>(`${this.apiUrl}/${id}`,entity);
  }
}
