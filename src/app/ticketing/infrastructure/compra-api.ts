import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CompraApiService {
  private http: HttpClient = inject(HttpClient);

  // Construimos la ruta: http://57.156.67.21/compras
  private comprasUrl = `${environment.apiBaseUrl}${environment.comprasEndpointPath}`;

  realizarCompra(compraData: any): Observable<any> {
    return this.http.post(this.comprasUrl, compraData);
  }
}
