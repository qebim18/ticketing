import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsuarioApiService {
  private http: HttpClient = inject(HttpClient);

  // 1. Usamos la base y la ruta de clientes que pidió Alejandro
  private clientesUrl = `${environment.apiBaseUrl}${environment.clientesEndpointPath}`;

  // 2. Silenciamos el GET devolviendo un arreglo vacío usando 'of([])'.
  // Así tu tabla UserList no se rompe al compilar, respetando que el endpoint no existe en el backend.
  getUsuarios(): Observable<any[]> {
    return of([]);
  }

  // 3. El POST de registro que sí está habilitado en su server.js
  createUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.clientesUrl}/registro`, usuario);
  } // <--- ESTA ES LA LLAVE QUE FALTABA

  // 4. Simulamos el DELETE para que no se rompa la tabla
  deleteUsuario(id: number): Observable<any> {
    return of(null);
  }
}
