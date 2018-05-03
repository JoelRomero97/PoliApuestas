import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { TituloComponent } from './titulo/titulo.component';
import { ContenidoComponent } from './contenido/contenido.component';


@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    TituloComponent,
    ContenidoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
