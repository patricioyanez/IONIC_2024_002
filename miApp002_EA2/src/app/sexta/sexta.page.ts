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
  async listar()
  {
    this.listado = await this.apirestService.getUsers();
  }
}
