import { Component, input, InputSignal, ChangeDetectionStrategy, inject } from '@angular/core';
import { Evento } from '../../../domain/model/evento.entity';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { CompraDialog } from '../compra-dialog/compra-dialog';

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
  private dialog = inject(MatDialog);

  abrirCompra(): void {
    this.dialog.open(CompraDialog, {
      width: '400px',
      data: this.evento(), // Pasa los datos del evento actual al modal
    });
  }
}
