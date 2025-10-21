import { Injectable } from '@angular/core';
import { Seriados } from '../types/types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriadosComponent {
  
  private readonly API = 'http://localhost:3000/seriados';

  constructor(private http: HttpClient) {}
  listar(): Observable<Seriados[]> {
    return this.http.get<Seriados[]>(this.API);
  }

  salvar(medicamento: Seriados): Observable<Seriados> {
    return this.http.post<Seriados>(this.API, medicamento);
  }

  excluir(id: number): Observable<Seriados> {
    return this.http.delete<Seriados>(this.API + `/${id}`);
  }

  buscarPorId(id: number): Observable<Seriados | undefined> {
    return this.http.get<Seriados>(this.API + `/${id}`);
  }

}