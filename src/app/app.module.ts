import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './Tarea/menu/menu.component';
import { DistanciaPuntosModule } from './Tarea/distancia-puntos/distancia-puntos.module';
import { ResistenciasModule } from './Tarea/resistencias/resistencias.module';
import { CinepolisModule } from './Tarea/cinepolis/cinepolis.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DistanciaPuntosModule,
    ResistenciasModule,
    CinepolisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
