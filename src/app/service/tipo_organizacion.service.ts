import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/main';
import { TipoOrganizacion } from 'src/interfaces';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TipoOrganizacionService {


  apiUrl: string = environment.API_URL+'/tipo_organizacion';
  constructor(private http: HttpClient) {}

  getAll(): Observable<TipoOrganizacion[]> {
    return this.http.get<TipoOrganizacion[]>(this.apiUrl);
  }
}
