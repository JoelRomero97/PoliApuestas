import { Component, OnInit } from '@angular/core';
import { Eventomodel } from '../../../shared/models/evento.model';
import { EventService } from '../../../services/event.service';

@Component({
  selector: 'app-eventocreate',
  templateUrl: './eventocreate.component.html',
  styleUrls: ['./eventocreate.component.css']
})
export class EventocreateComponent implements OnInit {

  constructor(private servicio: EventService) {
   }

  ngOnInit() {
  }

  onSubmit(form) {
    const event: Eventomodel = new Eventomodel(form.value.titulo, form.value.descripcion);
    this.servicio.create(event).subscribe(
      result => {console.log(result)},
      error => {console.log(error)}
    );


    this.servicio.list().subscribe(
      result => {console.log(result)},
      error => {console.log(error)}
    );
    // console.log(form.value);
  }

}
