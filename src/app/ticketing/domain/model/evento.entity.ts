export class Evento {
  id: number;
  nombre: string;
  lugar: string;
  fecha: string;
  imagen: string;

  // Agrega solo estas dos líneas nuevas como opcionales:
  fecha_inicio?: string;
  estado?: string;

  constructor(id: number, nombre: string, lugar: string, fecha: string, imagen: string) {
    this.id = id;
    this.nombre = nombre;
    this.lugar = lugar;
    this.fecha = fecha;
    this.imagen = imagen;
  }
}
