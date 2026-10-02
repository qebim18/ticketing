import { UsuarioResponse } from './usuario-response';
import { Usuario } from '../domain/model/usuario.entity';

export class UsuarioAssembler {
  static toEntityFromResponse(response: UsuarioResponse): Usuario {
    const usuario = new Usuario();
    usuario.id_usuario = response.id_usuario;
    usuario.email = response.email;
    usuario.nombres = response.nombres;
    usuario.apellidos = response.apellidos;
    usuario.tipo_usuario = response.tipo_usuario;
    usuario.activo = response.activo;
    return usuario;
  }

  static toEntityFromResponseArray(responseArray: UsuarioResponse[]): Usuario[] {
    return responseArray.map((response) => this.toEntityFromResponse(response));
  }
}
