import { Component } from '@angular/core';

@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent {

  colores = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
    'gray',
    'white'
  ];

  colorTol = [
    'gold',
    'silver'
  ];

  band1:string='black';
  band2:string='black';
  band3:string='black';
  tole:string='gold';
  banda1:number=0;
  banda2:number=0;
  banda3:number=0;
  tolerancia:number=0.0;
  resistencia:number=0;
  min:number=0;
  max:number=0;

  color1(){
    switch(this.band1){
      case "black":
        this.banda1=0;
      break;
      case "brown":
        this.banda1=1;
      break;
      case "red":
        this.banda1=2;
      break;
      case "orange":
        this.banda1=3;
      break;
      case "yellow":
        this.banda1=4;
      break;
      case "green":
        this.banda1=5;
      break;
      case "blue":
        this.banda1=6;
      break;
      case "purple":
        this.banda1=7;
      break;
      case "gray":
        this.banda1=8;
      break;
      case "white":
        this.banda1=9;
      break;

    }
  }

  color2(){
    switch(this.band2){
      case "black":
        this.banda2=0;
      break;
      case "brown":
        this.banda2=10;
      break;
      case "red":
        this.banda2=20;
      break;
      case "orange":
        this.banda2=30;
      break;
      case "yellow":
        this.banda2=40;
      break;
      case "green":
        this.banda2=50;
      break;
      case "blue":
        this.banda2=60;
      break;
      case "purple":
        this.banda2=70;
      break;
      case "gray":
        this.banda2=80;
      break;
      case "white":
        this.banda2=90;
      break;

    }
  }

  color3(){
    switch(this.band3){
      case "black":
        this.banda3=1;
      break;
      case "brown":
        this.banda3=10;
      break;
      case "red":
        this.banda3=100;
      break;
      case "orange":
        this.banda3=1000;
      break;
      case "yellow":
        this.banda3=10000;
      break;
      case "green":
        this.banda3=100000;
      break;
      case "blue":
        this.banda3=1000000;
      break;
      case "purple":
        this.banda3=10000000;
      break;
      case "gray":
        this.banda3=100000000;
      break;
      case "white":
        this.banda3=1000000000;
      break;
    }

  }

  tol(){
    switch(this.tole){
      case "gold":
        this.tolerancia=0.05;
      break;
      case "silver":
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
