import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzasComponent } from './pizzas.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PizzasComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    PizzasComponent
  ]
})
export class PizzasModule { }
