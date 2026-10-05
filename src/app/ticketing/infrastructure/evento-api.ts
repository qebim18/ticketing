import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EventoApiService {
  private http: HttpClient = inject(HttpClient);

  getEventos(): Observable<any[]> {
    // Esto construirá: http://57.156.67.21/eventos
    const url = `${environment.apiBaseUrl}${environment.eventosEndpointPath}`;
    return this.http.get<any[]>(url);
  }
}
