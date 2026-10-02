import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
// Importamos correctamente la capa de Aplicación
import { UsuarioApp } from '../../../application/usuario-app';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './user-form.html',
})
export class UserForm {
  // Inyectamos el gestor de estado (Clean Code / DDD)
  private usuarioApp = inject(UsuarioApp);

  usuarioData = {
    email: '',
    nombres: '',
    apellidos: '',
    tipo_usuario: 'C',
    activo: true,
  };

  guardar(): void {
    // Delegamos la acción a la capa Application
    this.usuarioApp.createUsuario(this.usuarioData);
  }
}
