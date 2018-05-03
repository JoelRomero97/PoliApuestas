import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { TituloComponent } from './titulo/titulo.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { Color2Component } from './color2/color2.component';


@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    TituloComponent,
    ContenidoComponent,
    Color2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
