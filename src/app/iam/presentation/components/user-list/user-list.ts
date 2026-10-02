import { Component, OnInit, inject, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UsuarioApp } from '../../../application/usuario-app';
import { Usuario } from '../../../domain/model/usuario.entity';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './user-list.html',
})
export class UserList implements OnInit {
  // Inyectamos la capa de aplicación
  protected usuarioApp: UsuarioApp = inject(UsuarioApp);

  // Consumimos la Signal reactiva
  protected readonly usuarios: Signal<Usuario[]> = this.usuarioApp.usuarios;

  columnas: string[] = ['id', 'nombres', 'email', 'acciones'];

  ngOnInit(): void {
    // Cargamos los datos al iniciar
    this.usuarioApp.loadUsuarios();
  }

  eliminar(id: number): void {
    if (confirm('¿Seguro que deseas eliminar este usuario?')) {
      this.usuarioApp.deleteUsuario(id);
    }
  }
}
