import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reto1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reto1.component.html',
  styleUrl: './reto1.component.css'
})
export class Reto1Component {
  email:string = '';
  password:string = '';
  password2:string = '';
  verificacion:String = '';

  botonverificar():String{

    if(this.password == this.password2){
      return this.verificacion = 'Bienvenido';
    }else {
      return this.verificacion = 'Contraseñas distintas';
    }

    
  }
}
