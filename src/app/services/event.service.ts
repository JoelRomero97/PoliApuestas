import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Eventomodel } from '../shared/models/evento.model';

@Injectable()
export class EventService {

  constructor(private http:HttpClient) {
  }

  create (data : Eventomodel)
  {
    return this.http.post("https://poliapuestas.firebaseio.com/Evento.json", data);
  }

  list ()
  {
    return this.http.get("https://poliapuestas.firebaseio.com/Evento.json");
  }

}
