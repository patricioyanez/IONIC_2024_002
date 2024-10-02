import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-segunda',
  templateUrl: './segunda.page.html',
  styleUrls: ['./segunda.page.scss'],
})
export class SegundaPage implements OnInit {
  valorParametro1:any;
  valorParametro2:any;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.valorParametro1= this.activatedRoute.snapshot.paramMap.get("num");
    
    this.activatedRoute.paramMap.subscribe(params =>{
      this.valorParametro2 = params.get("id");
    })

  }

}
