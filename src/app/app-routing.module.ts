import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistanciaPuntosComponent } from './Tarea/distancia-puntos/distancia-puntos.component';
import { ResistenciasComponent } from './Tarea/resistencias/resistencias.component';
import { CinepolisComponent } from './Tarea/cinepolis/cinepolis.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'distanciaPuntos', component: DistanciaPuntosComponent},
  {path: 'resistencias', component: ResistenciasComponent },
  {path: 'cinepolis', component: CinepolisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
