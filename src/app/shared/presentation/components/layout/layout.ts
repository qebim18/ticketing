import { Component, signal, inject, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { HeaderContent } from '../header-content/header-content';
import { FooterContent } from '../footer-content/footer-content';
import { EventList } from '../../../../ticketing/presentation/components/event-list/event-list';
import { Evento } from '../../../../ticketing/domain/model/evento.entity';
import { UserList } from '../../../../iam/presentation/components/user-list/user-list';
import { UserForm } from '../../../../iam/presentation/components/user-form/user-form';
import { MisCompras } from '../../../../ticketing/presentation/components/mis-compras/mis-compras';

// Importa tu nuevo servicio
import { EventoApiService } from '../../../../ticketing/infrastructure/evento-api';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderContent, FooterContent, EventList, UserList, UserForm, MatTabsModule, MisCompras],
  templateUrl: './layout.html',
})
export class Layout implements OnInit {
  // Inyectamos el servicio
  private eventoApi = inject(EventoApiService);

  // Empezamos con una lista vacía
  eventos = signal<Evento[]>([]);

  ngOnInit() {
    // Al iniciar, pedimos los datos al json-server
    this.eventoApi.getEventos().subscribe({
      next: (data) => this.eventos.set(data),
      error: (err) => console.error('Error al cargar eventos', err),
    });
  }
}
