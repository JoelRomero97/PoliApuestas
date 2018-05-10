import { Component, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginService } from './../../services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mensaje : string = '';
  logging : boolean = false;

  constructor(private servicio:LoginService) { }

  ngOnInit() {
  }

  logUser (formulario) //Esta función manda a llamar a LoginService
  {
    this.logging = true;
    this.servicio.logUser(formulario).subscribe(
      result => {this.mensaje = result},
      error => {this.mensaje = error, this.logging = false},
      () => this.logging = false);
    this.logging = true;
  }
}
