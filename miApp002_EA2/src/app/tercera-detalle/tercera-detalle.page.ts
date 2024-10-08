import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tercera-detalle',
  templateUrl: './tercera-detalle.page.html',
  styleUrls: ['./tercera-detalle.page.scss'],
})
export class TerceraDetallePage implements OnInit {
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
  persona:any
  constructor(private activatedRoute:ActivatedRoute,
    private alertController: AlertController,
    private toastController: ToastController
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(x => {
      const id = Number(x.get("id"));
      // buscar en la colección
      this.persona = this.personas.find( xx=> xx.id== id);
      console.table(this.persona);
    })

  }
  async si()
  {
    const alert = await this.alertController.create({
      header: 'Atención',
      subHeader: 'Mensaje importante',
      message: 'Te agrado la persona de la imagen',
      buttons: ['Aceptar']
    });
    await alert.present();
  }
  async no()
  {
    const toast = await this.toastController.create({
      header: 'Atención',
      message: 'NO Te agrado la persona de la imagen',
      icon: 'close-circle-outline',
      duration: 2000,
      color: 'danger',
      buttons: ['Aceptar']
    });
    await toast.present();
  }
}
