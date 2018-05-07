import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  user : string = "joelrg1288@gmail.com";
  password : string = "qwerty12345";

  constructor() { }

  logUser(formulario) : Observable <string>
  {
    return new Observable(observer =>
      {
        //Tiempo para simular la petición Http
        setTimeout (() =>
                    {
                      if ((formulario.value.correo) == this.user)
                      {
                        if ((formulario.value.password) == this.password)
                        {
                          //Primer parámetro de suscripción, cuando es correcta la petición
                          observer.next("Login correcto");
                        }else
                        {
                          //Segundo parámetro de suscripción, cuando es errónea la petición
                          observer.error("Contraseña incorrecta");
                        }
                        }else
                        {
                          //Segundo parámetro de suscripción, cuando es errónea la petición
                          observer.error("Correo incorrecto");
                        }
                        observer.complete()
                    }, 2000);
      });
  }
}
