import { Component, InputSignal, input, ChangeDetectionStrategy } from '@angular/core';
import { Evento } from '../../../domain/model/evento.entity';
import { EventItem } from '../event-item/event-item';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [EventItem, MatGridListModule],
  templateUrl: './event-list.html',
  styleUrls: ['./event-list.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventList {
  eventos: InputSignal<Evento[]> = input.required<Evento[]>();
}
