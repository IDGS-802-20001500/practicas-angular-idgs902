import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {

  opciones = [
    'Si',
    'No'
  ];

  card:string="No";
  boletos:number=0;
  personas:number=0;
  cliente:string="";
  total:number=0;
  mensaje:string="";
  precioBol:number=12;
  lim:number = 0;

  compra(){

    this.lim = this.personas * 7;

    if(this.boletos > this.lim){
      this.total=0.0;
      this.mensaje = "Solo 7 boletos por persona";
    }
    else{

      this.total = this.precioBol * this.boletos;

      if(this.boletos > 5){
        this.total = this.total - (this.total*0.15);
        if(this.card == "Si"){
          this.total = this.total - (this.total*0.10);
          this.mensaje = "";
        }
        else{
          this.total = this.total;
          this.mensaje = "";
        }
      }
      else if(this.boletos >= 3 && this.boletos <= 5){
        this.total = this.total - (this.total * 0.10);
        if(this.card == "Si"){
          this.total = this.total - (this.total * 0.10);
          this.mensaje = "";
        }
        else{
          this.total = this.total;
          this.mensaje = "";
        }
      }
      else{
        this.total = this.total;
        if(this.card == "Si"){
          this.total = this.total - (this.total*0.10);
          this.mensaje = "";
        }
        else{
          this.total = this.total;
          this.mensaje = "";
        }
      }

    }

  }



}
