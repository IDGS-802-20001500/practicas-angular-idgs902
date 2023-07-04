import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css'],
})
export class PizzasComponent {

  SelectIngrediente: string[] = [];

  ingredientes: string[] = ['jamón', 'piña', 'champiñones'];
  tamanios = ['chica', 'mediana', 'grande'];

  precioTam: number = 0;
  sumaIngredientes: number = 0;

  nombre!:string;
  direccion!:string;
  tamanio!:string;
  tel!:string;
  numPizzas!:number;
  subTotal!:number;
  Total!:number;

  ordenPizza: any[] = [];
  ordenFinalizada: any[] = [];


  manejarCambioCheckbox(ingredient: string) {
    const indice = this.SelectIngrediente.indexOf(ingredient);

    if (indice > -1) {
      this.SelectIngrediente.splice(indice, 1);
    } else {
      this.SelectIngrediente.push(ingredient);
    }
  }

  calcularSumaIngredientes() {
    this.sumaIngredientes = 0;
    for (const ingrediente of this.SelectIngrediente) {
      // Realiza la lógica para obtener el valor numérico correspondiente a cada ingrediente
      // y añádelo a la suma
      if (ingrediente === 'jamón') {
        this.sumaIngredientes += 10;
      } else if (ingrediente === 'piña') {
        this.sumaIngredientes += 10;
      } else if (ingrediente === 'champiñones') {
        this.sumaIngredientes += 10;
      }
    }
  }

  calcularPrecioTam():void{
    this.precioTam = 0;

    if(this.tamanio == 'chica'){
      this.precioTam = 40;
    } else if (this.tamanio == 'mediana'){
      this.precioTam = 80;
    } else if(this.tamanio == 'grande'){
      this.precioTam = 120;
    }

  }

  agregarOrden():void{
    this.obtenerValores();
    this.calcularPrecioTam();
    this.calcularSumaIngredientes();

    const ordenPizza = {
      nombre: this.nombre,
      direccion: this.direccion,
      tel: this.tel,
      tamanio: this.tamanio,
      ingredientes: this.SelectIngrediente,
      numPizzas: this.numPizzas,
      subTotal: (this.precioTam + this.sumaIngredientes)*this.numPizzas
    }

    this.ordenPizza.push(ordenPizza);


  }

  obtenerValores():void{
    this.nombre = this.pizzasForm.get('nombre')?.value;
    this.direccion = this.pizzasForm.get('direccion')?.value;
    this.tel = this.pizzasForm.get('telefono')?.value;
    this.tamanio = this.pizzasForm.get('tamano')?.value;
    this.numPizzas = this.pizzasForm.get('numPizzas')?.value;

  }

  quitar():void{
    this.ordenPizza.pop();
  }

  terminar():void{


    for(let pizza of this.ordenPizza){
      const ordenFinal = {
        nombre: pizza.nombre,
        total: pizza.subTotal
      };
      this.ordenFinalizada.push(ordenFinal);
    }

    this.ordenFinalizada = this.ordenFinalizada;
    this.ordenPizza.splice(0,this.ordenPizza.length);

    for (let piz of this.ordenPizza){
      this.Total += piz.subTotal;
    }

  }

  totalFuncion():void{
    this.Total = 0;
    for (let piz of this.ordenPizza){
      this.Total += piz.subTotal;
    }
  }

  sumaTotales(): number {
    return this.ordenFinalizada.reduce((total, venta) => total + venta.total, 0);
  }

  alertaCompra() {
    this.totalFuncion();
    const result = window.confirm('Total: $'+this.Total+' \n ¿Desea continuar?');

    if (result) {
      // Opción Aceptada
      this.terminar();

    } else {
      // Opción Cancelada

    }
  }

  pizzasForm!: FormGroup;
  constructor(private readonly fb: FormBuilder) {
    this.pizzasForm = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      tamano:[''],
      ingrediente: [''],
      numPizzas: ['', Validators.required],
    });
  }
}
