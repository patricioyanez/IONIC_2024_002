import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuarta',
  templateUrl: './cuarta.page.html',
  styleUrls: ['./cuarta.page.scss'],
})
export class CuartaPage implements OnInit {
  id:string = '';
  nombre:string = '';
  constructor() { }
/**
 * Ejercicio 19: Crear un formulario con text para
 * codigo y nombre y almecenar en el localstorage
 */
  ngOnInit() {
    //localStorage.setItem("1", "Ignacia");
  }
  limpiar()
  {

  }
  guardar()
  {

  }
}
