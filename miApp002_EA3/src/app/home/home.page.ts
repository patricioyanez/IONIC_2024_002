import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  // crear los metodos dividir, multiplicar y restar
// aplicar 4 test a cada metodos

// https://www.youtube.com/watch?v=7E0tP7H550g&list=PLk2rufbc0DMqL8Vx1zbQdTYqVwM5LjZnb&index=12
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
