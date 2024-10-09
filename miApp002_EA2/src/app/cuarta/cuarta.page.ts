import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
AlertController
@Component({
  selector: 'app-cuarta',
  templateUrl: './cuarta.page.html',
  styleUrls: ['./cuarta.page.scss'],
})
export class CuartaPage implements OnInit {
  id:string = '';
  nombre:string = '';
  constructor(private alertController: AlertController,
              private toastController: ToastController
  ) { }
/**
 * Ejercicio 19: Crear un formulario con text para
 * codigo y nombre y almecenar en el localstorage
 */
  ngOnInit() {
    //localStorage.setItem("1", "Ignacia");
  }
  limpiar()
  {
    this.id = this.nombre = "";
  }
  async guardar()
  {
    if(this.id == "" || this.id == "0")
    {
      const alert = await this.alertController.create({
        header: 'Error',
        subHeader: 'Valor Id',
        message: 'El valor indicado no es válido',
        buttons: ['Aceptar']
      });
      await alert.present();
    }
    else if(this.nombre.trim().length < 1)
    {
      const alert = await this.alertController.create({
        header: 'Error',
        subHeader: 'Nombre',
        message: 'El nombre no es válido',
        buttons: ['Aceptar']
      });
      await alert.present();
    }
    else
    {
      localStorage.setItem(this.id, this.nombre);
      const toast = await this.toastController.create({
        header: 'Información',
        message: 'Los datos fueron guardados',
        icon: 'checkmark-circle-outline',
        duration: 4000,
        color: 'success',
        position: 'middle',
        buttons: ['Aceptar']
      });
      await toast.present();
    }
  }
}
