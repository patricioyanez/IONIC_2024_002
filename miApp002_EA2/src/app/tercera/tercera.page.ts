import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tercera',
  templateUrl: './tercera.page.html',
  styleUrls: ['./tercera.page.scss'],
})
export class TerceraPage implements OnInit {
  personas = [
    {
      id    : 1,
      nombre: 'Juan',
      edad  : 30,
      foto  : 'https://img.freepik.com/foto-gratis/retrato-estudio-hombre-moreno-confianza_1187-5799.jpg?w=2000'
    },
    {
      id    : 2,
      nombre: 'Diana',
      edad  : 28,
      foto  : 'https://image.shutterstock.com/image-photo/happy-young-woman-sitting-on-260nw-2018571389.jpg'

    },
    {
      id    : 3,
      nombre: 'Pedro',
      edad  : 45,
      foto  : 'https://img.freepik.com/foto-gratis/apuesto-hombre-empresario-sonriendo-alegre_176420-17877.jpg?w=2000'

    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
