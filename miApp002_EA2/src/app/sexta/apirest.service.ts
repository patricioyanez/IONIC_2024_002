import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApirestService {
  private urlBase = 'https://jsonplaceholder.typicode.com/';
  listado : any = [];
  listado2 : any = [];

  constructor(private httpClient:HttpClient) { }
/* Ejercicio 26: mostrar la información de los usuarios en la pagina sexta  */
  getUsers()
  {
    const ruta = this.urlBase + 'users';
    this.httpClient.get(ruta).subscribe((data=[])=> {this.listado = data });
    return this.listado;
  }

}
