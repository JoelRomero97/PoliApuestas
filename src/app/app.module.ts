import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { TituloComponent } from './titulo/titulo.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { Color2Component } from './color2/color2.component';

import { InstagramService } from './services/instagram.service';
import { HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    TituloComponent,
    ContenidoComponent,
    Color2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [InstagramService],
  bootstrap: [AppComponent]
})
export class AppModule { }
