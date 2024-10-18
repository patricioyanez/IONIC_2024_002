/**
 * importa el modulo
 * HttpClientModule en el archivo app.module.ts
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApirestService {
  private urlBase = 'https://jsonplaceholder.typicode.com/';
  listado : any = [];
  listado2 : any = [];

  constructor(private httpClient:HttpClient) { }
/* Ejercicio 26: mostrar la información de los usuarios en la pagina sexta  */
  async getUsers()
  {
    const ruta = this.urlBase + 'users';
    return await firstValueFrom(this.httpClient.get(ruta));
  } 
  async getPosts(id:string)
  {
    const ruta = this.urlBase + 'users/' + id +'/posts';
    return await firstValueFrom(this.httpClient.get(ruta));
  }
}
