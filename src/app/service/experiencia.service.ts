import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Experiencia } from 'src/main';
import { environment } from 'src/main';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ExperienciaService {
  
  objeto:String="experiencia";
  apiUrl: string = environment.API_URL+'/'+this.objeto;

  // Creamos un Subject que emite una señal cada vez que se elimina una experiencia
  private experienciaEliminadaSubject = new Subject<number>();
  experienciaEliminada$ = this.experienciaEliminadaSubject.asObservable();

  constructor(private http: HttpClient) {}

  getAll() : Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.apiUrl);
  }

  getOne(id:number) : Observable<Experiencia>{
    return this.http.get<Experiencia>(`${this.apiUrl}/${id}`);
  }

  save(entity:Experiencia): Observable<Experiencia> {
    return this.http.post<Experiencia>(this.apiUrl, entity);
  }

  update(id:number, entity:Experiencia): Observable<Experiencia>{
    return this.http.put<Experiencia>(`${this.apiUrl}/${id}`,entity);
  }

  delete(id:number){
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      // Emitimos una señal al Subject de experiencia eliminada
      tap(() => this.experienciaEliminadaSubject.next(id))
    );
  }
}
