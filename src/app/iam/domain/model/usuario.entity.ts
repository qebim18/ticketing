export class Usuario {
  id_usuario: number;
  email: string;
  nombres: string;
  apellidos: string;
  tipo_usuario: string; // 'C', 'O', 'A'
  activo: boolean;

  constructor() {
    this.id_usuario = 0;
    this.email = '';
    this.nombres = '';
    this.apellidos = '';
    this.tipo_usuario = 'C'; // Cliente por defecto
    this.activo = true;
  }
}
