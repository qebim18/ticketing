import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Usuario } from '../domain/model/usuario.entity';
import { UsuarioResponse } from './usuario-response';
import { UsuarioAssembler } from './usuario-assembler';

@Injectable({
  providedIn: 'root',
})
export class UsuarioApiService {
  // IP de la VM de Aplicación apuntando al script PHP
  private baseUrl: string = 'http://57.156.67.21/api';
  private http: HttpClient = inject(HttpClient);

  getUsuarios(): Observable<Usuario[]> {
    return this.http
      .get<UsuarioResponse[]>(`${this.baseUrl}/usuarios.php`)
      .pipe(map((responseArray) => UsuarioAssembler.toEntityFromResponseArray(responseArray)));
  }

  createUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/usuarios.php`, usuario);
  }

  updateUsuario(id: number, usuario: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/usuarios.php?id=${id}`, usuario);
  }

  deleteUsuario(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/usuarios.php?id=${id}`);
  }
}
