import { Component } from "@angular/core";


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent{
  nombre: string = 'Iron-man';
  edad  : number = 36;

  get nombreCapitalizado():string{
    return this.nombre.toUpperCase();
  }

  obternetNombre():string{
    return `${this.nombre} - ${this.edad}`
  }

  cambiarNombre():void{
    this.nombre = 'Spiderman'
  }

  cambiarEdad():void{
    this.edad = 45
  }
}
