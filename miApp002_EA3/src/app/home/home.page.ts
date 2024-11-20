import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  // crear los metodos multiplicar y restar
// aplicar 4 test a cada metodos
  sumar(n1:number, n2:number)
  {
    return n1+n2;
  }
  dividir(n1:number, n2:number)
  {
    if(n2 == 0)
      return -1;
    return n1/n2;
  }
}
