import { Component, input, InputSignal, ChangeDetectionStrategy } from '@angular/core';
import { Evento } from '../../../domain/model/evento.entity';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-event-item',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './event-item.html',
  styleUrls: ['./event-item.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventItem {
  evento: InputSignal<Evento> = input.required<Evento>();
}
