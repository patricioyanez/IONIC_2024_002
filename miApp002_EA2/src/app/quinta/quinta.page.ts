import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-quinta',
  templateUrl: './quinta.page.html',
  styleUrls: ['./quinta.page.scss'],
})
export class QuintaPage implements OnInit {
  persona:any = [];
  constructor(private crudService:CrudService,
              private alertController: AlertController,
              private toastController: ToastController
  ) { }

  ngOnInit() {
  }
  async guardar()
  {
    // Ejercicio 22: validar que los datos no esten en blanco
    if(this.persona.rut == null)
      {
        this.mensajeDeError('Falta especificar el rut');
      }
      else if(this.persona.nombre == null)
      {
        this.mensajeDeError('Falta especificar el nombre');
      }
      else if(this.persona.direccion == null)
      {
        this.mensajeDeError('Falta especificar la dirección');
      }
      else if(this.persona.correo == null)
      {
        this.mensajeDeError('Falta especificar el correo');
      }
      else if(this.persona.telefono == null)
      {
        this.mensajeDeError('Falta especificar el teléfono');
      }
      else if(this.persona.anio == null || this.persona.anio < 1900)
      {
        this.mensajeDeError('El año ingresado no es correcto');
      }
      else
      {
        this.crudService.guardar(this.persona.rut, this.persona);
        const toast = await this.toastController.create({
          header  : "Resultado",
          message : "Datos Guardados",
          icon    : 'checkmark-circle-outline',
          color   : 'success',
          duration: 2000,
          position: 'middle'
        });
        await toast.present();
        this.limpiar();
      }
  }
  async leer()
  {
    this.persona = await this.crudService.leer(this.persona.rut);
  }
  limpiar(){
    this.persona = [];
    const input = document.querySelector('ion-input');
    if(input != null)
      input.setFocus();
  }
  async mensajeDeError(mensaje:string)
  {
    const alerta = await this.alertController.create({
      header    : "Error",
      subHeader : "Mensaje del error",
      message   : mensaje,
      buttons   : ['Aceptar']
    });
    await alerta.present();
  }
  /*
  Ejercicio 23: Agregar el boton eliminar

  */
}
