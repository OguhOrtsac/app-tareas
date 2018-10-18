import { Component } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app-tareas';

  tareas: Tarea[]; //arreglo de tareas
  ultimoId: number; //a cada tarea se le asiganara un id

  constructor(){
    this.tareas = [
      {id:1, titulo:'Terminar el API', completada: false},
      {id:2, titulo:'Corregir historias de usuario', completada: true},
      {id:3, titulo:'Comprar boletos para el cine', completada: false}
    ];
    this.ultimoId = 3;
      //new Tarea({id:4, titulo:'probarotra forma'});
  }
  agregarTarea(tituloTarea: string){
    const tareaNueva = new Tarea({titulo: tituloTarea});
    tareaNueva.id = ++ this.ultimoId;
    this.tareas.push(tareaNueva);
  
  }
}



class Tarea {
  id: number;
  titulo: string;
  completada: boolean;

  constructor(valores: object = {}) {
    Object.assign(this, valores);
  }
}
