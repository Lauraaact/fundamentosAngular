import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; //usar directivas if, else, switch en html

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //Declaracion e inicialización de variables
  nombreFramework: string = 'Angular';
  horasBootcamp: number = 300;
  especialista: string = 'Luisa Castaño';
  contenidoBootcamp = {
    tecnologia1:'HTML',
    tecnologia2:'CSS',
    tecnologia3:'JavaScript',
    tecnologia4:'TypeScript',
    tecnologia5:'Angular'
  };
  objetoProducto = {
    nombre: 'galletas',
    cantidad : 30,
    vendido: true
  }
  colorFondo: string = 'colorPink';
  productos : string[] = ['carros','motos','bicicletas']
  //Funciones o metodos
  saludo(){
    console.log('Holaaa, soy un boton al que le diste click');
  }
  manejarMouseOver(){
    console.log('evento mouse encima');
    this.colorFondo = 'colorRojo';
  }
  manejarMouseOut(){
    console.log('evento mouse fuera');
    this.colorFondo = 'colorVerde';
  }
  manejarClick(){
    console.log('evento click');
    this.colorFondo = 'colorPink';
  }
  isLogged : boolean = true;
  isDelete : boolean = false;
  isShowed : boolean = false;
  //Exportaciones - Ciclo de vida

}
