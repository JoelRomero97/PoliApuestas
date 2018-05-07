import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from "./navigation/nav/nav.component";
import { LoginComponent } from "./auth/login/login.component";
import { PanelComponent } from './panel/panel.component';
import { HomeComponent } from "./panel/home/home.component";
import { ApuestasComponent } from "./panel/apuestas/apuestas.component";
import { ConfiguracionComponent } from "./panel/configuracion/configuracion.component";

const appRoutes:Routes = 
    [
        {
            //localhost:4200/login
            path:'login',
            component:LoginComponent
        },
        {
            //localhost:4200/admin
            path:'admin',
            component:PanelComponent,
            children:
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
        },
        {
            //Redirecciona a login
            path:'**',
            redirectTo:'login'
        }
    ]

@NgModule
({
    imports:
    [
        RouterModule.forRoot (appRoutes)
    ],
    exports:
    [
        RouterModule
    ]
})

export class AppRoutingModule
{
}