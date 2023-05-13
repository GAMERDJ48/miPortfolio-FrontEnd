import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Proyecto } from 'src/main';
import { environment } from 'src/main';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ProyectoService {
  
  objeto:String="proyecto";
  apiUrl: string = environment.API_URL+'/'+this.objeto;

  // Creamos un Subject que emite una señal cada vez que se elimina una proyecto
  private proyectoEliminadaSubject = new Subject<number>();
  proyectoEliminada$ = this.proyectoEliminadaSubject.asObservable();

  constructor(private http: HttpClient) {}

  getAll() : Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.apiUrl);
  }

  getOne(id:number) : Observable<Proyecto>{
    return this.http.get<Proyecto>(`${this.apiUrl}/${id}`);
  }

  save(entity:Proyecto): Observable<Proyecto> {
    return this.http.post<Proyecto>(this.apiUrl, entity);
  }

  update(id:number, entity:Proyecto): Observable<Proyecto>{
    return this.http.put<Proyecto>(`${this.apiUrl}/${id}`,entity);
  }

  delete(id:number){
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      // Emitimos una señal al Subject de proyecto eliminada
      tap(() => this.proyectoEliminadaSubject.next(id))
    );
  }
}
