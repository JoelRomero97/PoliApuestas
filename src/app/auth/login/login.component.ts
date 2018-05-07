import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mensaje : any;

  constructor(private servicio:LoginService) { }

  ngOnInit() {
  }

  logUser (formulario) //Esta función manda a llamar a LoginService
  {
    this.servicio.logUser(formulario).subscribe(
      result => {this.mensaje = result},
      error => {this.mensaje = error});
  }
}
