import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { Evento } from '../../../domain/model/evento.entity';

// 1. Importamos el servicio que acabas de crear
import { CompraApiService } from '../../../infrastructure/compra-api';

@Component({
  selector: 'app-compra-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
  ],
  templateUrl: './compra-dialog.html',
})
export class CompraDialog {
  // 2. Inyectamos el servicio
  private compraService = inject(CompraApiService);

  zonas = [
    { id: 1, nombre: 'General', precio: 150.0 },
    { id: 2, nombre: 'VIP', precio: 300.0 },
  ];

  zonaSeleccionada: any = null;
  cantidad: number = 1;

  constructor(
    public dialogRef: MatDialogRef<CompraDialog>,
    @Inject(MAT_DIALOG_DATA) public evento: Evento,
  ) {}

  get totalPagar(): number {
    return this.zonaSeleccionada ? this.zonaSeleccionada.precio * this.cantidad : 0;
  }

  confirmarCompra(): void {
    if (!this.zonaSeleccionada || this.cantidad < 1) return;

    const payloadCompra = {
      id_cliente: 1,
      id_tipo_entrada: this.zonaSeleccionada.id,
      cantidad: this.cantidad,
      total: this.totalPagar,
    };

    // 3. Ejecutamos el POST real hacia el servidor de Alejandro
    this.compraService.realizarCompra(payloadCompra).subscribe({
      next: (res) => {
        console.log('Compra exitosa en Azure:', res);
        this.dialogRef.close(true);
        alert('¡Compra registrada con éxito en la base de datos!');
      },
      error: (err) => {
        console.error('Error al registrar compra:', err);
        alert('Hubo un error de conexión al procesar la compra.');
      },
    });
  }
}
