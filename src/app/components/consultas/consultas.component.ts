import { Component} from '@angular/core';

interface Consulta {
  nombre: string,
  tiempo: string,
  fecha: string,
  observaciones: string
}

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent {

  nombre: string = "";
  tiempo: string = "";
  fecha: string = "";
  observaciones: string = "";

  consultas: Consulta[] = [];


  constructor() { 
    this.consultas = JSON.parse(localStorage.getItem('consultas') || '[]')
   }

  crearConsulta(){
    this.consultas.push(
      {
        nombre: this.nombre,
        tiempo: this.tiempo,
        fecha: this.fecha,
        observaciones: this.observaciones
      }
    )
    localStorage.setItem('consultas', JSON.stringify(this.consultas));
    this.limpiar();
  }

  eliminarConsulta(index: number){
    this.consultas.splice(index,1);
    localStorage.setItem('consultas', JSON.stringify(this.consultas));
  }

  limpiar(){
    this.nombre = '';
    this.tiempo = '';
    this.fecha = '';
    this.observaciones = '';
  }

}
