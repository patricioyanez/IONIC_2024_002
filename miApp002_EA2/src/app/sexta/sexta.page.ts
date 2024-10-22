import { Component, OnInit } from '@angular/core';
import { ApirestService } from './apirest.service';

@Component({
  selector: 'app-sexta',
  templateUrl: './sexta.page.html',
  styleUrls: ['./sexta.page.scss'],
})
export class SextaPage implements OnInit {
  listado : any = [];
  constructor(private apirestService:ApirestService) { }

  ngOnInit() {
    this.listar();
  }
  /* Ejercicio 26: mostrar la información de los usuarios en la pagina sexta  
  id, nombre, nombre de usuario y correo.
  list e Item
*/
  async listar()
  {
    this.listado = await this.apirestService.getUsers();
  }
 /*
    Ejercicio 27: Desplegar los post del usuario seleccionado
    sextaposts
  */
}
