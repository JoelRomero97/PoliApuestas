import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { TituloComponent } from './titulo/titulo.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { Color2Component } from './color2/color2.component';

import { InstagramService } from './services/instagram.service';
import { ApuestaService } from './services/apuesta.service';
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { LoginComponent } from './auth/login/login.component';
import { LoaderComponent } from './elements/loader/loader.component';
import { NavComponent } from './navigation/nav/nav.component';
import {MatTabsModule} from '@angular/material/tabs';

import { MediaMatcher, BreakpointObserver } from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './panel/home/home.component';
import { ApuestasComponent } from './panel/apuestas/apuestas.component';
import { ConfiguracionComponent } from './panel/configuracion/configuracion.component';
import { PanelComponent } from './panel/panel.component';
import { NuevasApuestasComponent } from './panel/apuestas/nuevas-apuestas/nuevas-apuestas.component';
import { ApuestasPasadasComponent } from './panel/apuestas/apuestas-pasadas/apuestas-pasadas.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { EventosComponent } from './panel/eventos/eventos.component';
import { EventocreateComponent } from './panel/eventos/eventocreate/eventocreate.component';
import { EventService } from './services/event.service';


@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    TituloComponent,
    ContenidoComponent,
    Color2Component,
    LoginComponent,
    LoaderComponent,
    NavComponent,
    HomeComponent,
    ApuestasComponent,
    ConfiguracionComponent,
    PanelComponent,
    NuevasApuestasComponent,
    ApuestasPasadasComponent,
    EventosComponent,
    EventocreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatTabsModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [InstagramService, LoginService, BreakpointObserver, MediaMatcher, ApuestaService, EventService],
  bootstrap: [AppComponent],
  entryComponents: [
    EventocreateComponent
  ]
})
export class AppModule { }
