import { Component, signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs'; // <-- Nuevo import
import { HeaderContent } from '../header-content/header-content';
import { FooterContent } from '../footer-content/footer-content';
import { EventList } from '../../../../ticketing/presentation/components/event-list/event-list';
import { Evento } from '../../../../ticketing/domain/model/evento.entity';
import { UserList } from '../../../../iam/presentation/components/user-list/user-list';
import { UserForm } from '../../../../iam/presentation/components/user-form/user-form';

@Component({
  selector: 'app-layout',
  standalone: true,
  // Agrega MatTabsModule aquí
  imports: [HeaderContent, FooterContent, EventList, UserList, UserForm, MatTabsModule],
  templateUrl: './layout.html',
})
export class Layout {
  eventos = signal<Evento[]>([
    {
      id: 1,
      nombre: 'Concierto Rock Nacional',
      lugar: 'Arena Lima',
      fecha: '15 Nov 2026',
      imagen: 'https://via.placeholder.com/300x200',
    },
    {
      id: 2,
      nombre: 'Festival Urbano 2026',
      lugar: 'Estadio San Marcos',
      fecha: '02 Dic 2026',
      imagen: 'https://via.placeholder.com/300x200',
    },
  ]);
}
