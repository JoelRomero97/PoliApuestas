import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from "./../navigation/nav/nav.component";
import { LoginComponent } from "./../auth/login/login.component";
import { HomeComponent } from "./../panel/home/home.component";
import { ApuestasComponent } from "./../panel/apuestas/apuestas.component";
import {MatTabsModule} from '@angular/material/tabs';
import { ConfiguracionComponent } from "./../panel/configuracion/configuracion.component";

const appRoutes:Routes = 
  [
    {
      path:'',
      component:HomeComponent,
      pathMatch:'full'
    },
    {
        path:'apuesta',
        component:ApuestasComponent,
        pathMatch:'full'
    },
    {
        path:'configuracion',
        component:ConfiguracionComponent,
        pathMatch:'full'
    }
  ]

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  nav_config = [{
    label: "Home",
    link:"/admin"
  },
  {
    label:"Apuestas",
    link:"apuestas"
  },
  {
    label:"Configuracion",
    link:"conf"
  }];

  constructor() { }

  ngOnInit() {
  }

}
