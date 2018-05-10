import { Injectable } from '@angular/core';
import { Apuestamodel } from '../shared/models/apuesta.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApuestaService
{

  constructor(private httpClient : HttpClient)
  {
  }

  list ()
  {
    //
  }

  retrieve ()
  {
    //    
  }

  create (data : Apuestamodel)
  {
    return this.httpClient.post ("https://poliapuestas.firebaseio.com/Apuesta.json", data);
  }
}
