import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-mis-compras',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './mis-compras.html',
})
export class MisCompras {
  // Columnas a mostrar
  columnas: string[] = ['id_compra', 'evento', 'zona', 'cantidad', 'total'];

  // Datos simulados (Alejandro te mandará esto por GET luego)
  comprasMock = [
    {
      id_compra: 'TXT-1001',
      evento: 'Concierto Rock Nacional',
      zona: 'VIP',
      cantidad: 2,
      total: 600.0,
    },
    {
      id_compra: 'TXT-1002',
      evento: 'Festival Urbano 2026',
      zona: 'General',
      cantidad: 1,
      total: 150.0,
    },
  ];
}
