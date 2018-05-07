import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  user : any = "joelrg1288@gmail.com";
  password : any = "qwerty12345";

  constructor() { }

  logUser(formulario) : Observable <any>
  {
    // if ((formulario.value.correo) == this.user)
    // {
    //   if ((formulario.value.password) == this.password)
    //   {
    //     console.log("Login correcto");
    //   }else
    //   {
    //     console.log("Login incorrecto");
    //   }
    // }
    return new Observable(observer =>
      {
        setTimeout (() =>
                    {
                      if ((formulario.value.correo) == this.user)
                      {
                      if ((formulario.value.password) == this.password)
                      {
                          observer.next("Login correcto");
                      }else
                      {
                        observer.error("Contraseña incorrecta");
                      }
                      }else
                      {
                        observer.error("Correo incorrecto");
                      }
                    }, 2000);
      });
  }
}
