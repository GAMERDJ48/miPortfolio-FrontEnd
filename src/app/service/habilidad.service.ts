import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Habilidad } from 'src/main';
import { environment } from 'src/main';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class HabilidadService {
  
  objeto:String="habilidad";
  apiUrl: string = environment.API_URL+'/'+this.objeto;

  // Creamos un Subject que emite una señal cada vez que se elimina una habilidad
  private habilidadEliminadaSubject = new Subject<number>();
  habilidadEliminada$ = this.habilidadEliminadaSubject.asObservable();

  constructor(private http: HttpClient) {}

  getAll() : Observable<Habilidad[]>{
    return this.http.get<Habilidad[]>(this.apiUrl);
  }

  getOne(id:number) : Observable<Habilidad>{
    return this.http.get<Habilidad>(`${this.apiUrl}/${id}`);
  }

  save(entity:Habilidad): Observable<Habilidad> {
    return this.http.post<Habilidad>(this.apiUrl, entity);
  }

  update(id:number, entity:Habilidad): Observable<Habilidad>{
    return this.http.put<Habilidad>(`${this.apiUrl}/${id}`,entity);
  }

  delete(id:number){
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      // Emitimos una señal al Subject de habilidad eliminada
      tap(() => this.habilidadEliminadaSubject.next(id))
    );
  }
}
