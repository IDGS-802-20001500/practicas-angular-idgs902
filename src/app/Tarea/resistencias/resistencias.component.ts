import { Component } from '@angular/core';

@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent {



  band1:string='Negro';
  band2:string='Negro';
  band3:string='Negro';
  tole:string="";
  banda1:number=0;
  banda2:number=0;
  banda3:number=0;
  tolerancia:number=0.0;
  resistencia:number=0;
  min:number=0;
  max:number=0;

  color1(){
    switch(this.band1){
      case "negro":
        this.banda1=0;
      break;
      case "cafe":
        this.banda1=1;
      break;
      case "rojo":
        this.banda1=2;
      break;
      case "naranja":
        this.banda1=3;
      break;
      case "amarillo":
        this.banda1=4;
      break;
      case "verde":
        this.banda1=5;
      break;
      case "azul":
        this.banda1=6;
      break;
      case "violeta":
        this.banda1=7;
      break;
      case "gris":
        this.banda1=8;
      break;
      case "blanco":
        this.banda1=9;
      break;

    }
  }

  color2(){
    switch(this.band2){
      case "negro":
        this.banda2=0;
      break;
      case "cafe":
        this.banda2=10;
      break;
      case "rojo":
        this.banda2=20;
      break;
      case "naranja":
        this.banda2=30;
      break;
      case "amarillo":
        this.banda2=40;
      break;
      case "verde":
        this.banda2=50;
      break;
      case "azul":
        this.banda2=60;
      break;
      case "violeta":
        this.banda2=70;
      break;
      case "gris":
        this.banda2=80;
      break;
      case "blanco":
        this.banda2=90;
      break;

    }
  }

  color3(){
    switch(this.band3){
      case "negro":
        this.banda3=1;
      break;
      case "cafe":
        this.banda3=10;
      break;
      case "rojo":
        this.banda3=100;
      break;
      case "naranja":
        this.banda3=1000;
      break;
      case "amarillo":
        this.banda3=10000;
      break;
      case "verde":
        this.banda3=100000;
      break;
      case "azul":
        this.banda3=1000000;
      break;
      case "violeta":
        this.banda3=10000000;
      break;
      case "gris":
        this.banda3=100000000;
      break;
      case "blanco":
        this.banda3=1000000000;
      break;
    }

  }

  tol(){
    switch(this.tole){
      case "oro":
        this.tolerancia=0.05;
      break;
      case "plata":
        this.tolerancia=0.1;
      break;
    }
  }

  calcularResistencia(){
    this.tol();
    this.color1();
    this.color2();
    this.color3();

    this.resistencia = ((this.banda1+this.banda2)*this.banda3)

    this.min = ((this.banda1+this.banda2)*this.banda3)-(((this.banda1+this.banda2)*this.banda3)*this.tolerancia)
    this.max = (((this.banda1+this.banda2)*this.banda3)*(this.tolerancia+1))

  }




}
