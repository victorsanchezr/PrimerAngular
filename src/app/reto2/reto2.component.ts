import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reto2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reto2.component.html',
  styleUrl: './reto2.component.css'
})
export class Reto2Component {

  descripcion:string = "";
  codigo:string = "";
  preciocosto:number = 0;
  precioventa:number = 0;
  stock:number = 0;
  res = "";
  
  botonverificar():String{
    

   if(this.precioventa >0 && this.stock >0){
    return this.res = "Producto dado de alta"
   }else{ return this.res = "Error"}

    
  }


}
