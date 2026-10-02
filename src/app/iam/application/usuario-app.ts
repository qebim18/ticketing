import { computed, inject, signal, Signal, WritableSignal, Injectable } from '@angular/core';
import { Usuario } from '../domain/model/usuario.entity';
import { UsuarioApiService } from '../infrastructure/usuario-api';

@Injectable({ providedIn: 'root' })
export class UsuarioApp {
  private usuariosSignal: WritableSignal<Usuario[]> = signal<Usuario[]>([]);
  private usuarioApi: UsuarioApiService = inject(UsuarioApiService);

  readonly usuarios: Signal<Usuario[]> = computed(() => this.usuariosSignal());
  private readonly errorSignal = signal<string | null>(null);

  loadUsuarios(): void {
    this.usuarioApi.getUsuarios().subscribe({
      next: (usuarios) => {
        this.usuariosSignal.set(usuarios);
        this.errorSignal.set(null);
      },
      error: (err: unknown) => {
        this.errorSignal.set(this.formatError(err, 'Error al cargar usuarios'));
        console.error(this.errorSignal());
      },
    });
  }

  // NUEVO METODO PARA EL POST
  createUsuario(usuarioData: any): void {
    this.usuarioApi.createUsuario(usuarioData).subscribe({
      next: (res) => {
        console.log('POST exitoso', res);
        alert('Usuario creado');
        this.loadUsuarios(); // Recarga la tabla de usuarios automáticamente
      },
      error: (err: unknown) => console.error(this.formatError(err, 'Error al crear usuario')),
    });
  }

  deleteUsuario(id: number): void {
    this.usuarioApi.deleteUsuario(id).subscribe({
      next: () => {
        console.log('DELETE exitoso');
        this.loadUsuarios();
      },
      error: (err: unknown) => console.error(this.formatError(err, 'Error al eliminar')),
    });
  }

  private formatError = (error: unknown, fallback: string): string => {
    if (error instanceof Error) {
      return error.message;
    }
    return fallback;
  };
}
