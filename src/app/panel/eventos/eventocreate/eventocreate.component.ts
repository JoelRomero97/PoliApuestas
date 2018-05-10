import { Component, OnInit } from '@angular/core';
import { Eventomodel } from '../../../shared/models/evento.model';
import { EventService } from '../../../services/event.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-eventocreate',
  templateUrl: './eventocreate.component.html',
  styleUrls: ['./eventocreate.component.css']
})
export class EventocreateComponent implements OnInit {

  constructor(private servicio: EventService, private dialogRef:MatDialogRef <EventocreateComponent>) {
   }

  ngOnInit() {
  }

  onSubmit(form) {
    const event: Eventomodel = new Eventomodel(form.value.titulo, form.value.descripcion);
    this.servicio.create(event).subscribe(
      result => {console.log(result), this.dialogRef.close(result)},
      error => {console.log(error)}
    );
  }

}
