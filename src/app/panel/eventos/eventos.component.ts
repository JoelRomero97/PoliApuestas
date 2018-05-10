import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { EventocreateComponent } from './eventocreate/eventocreate.component';
import { UUID } from 'angular2-uuid';
import { EventService } from '../../services/event.service';
import { Eventomodel } from '../../shared/models/evento.model';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})

export class EventosComponent implements OnInit {

  displayedColumns = ['ID', 'Titulo', 'Descripcion'];
  dataSource;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(private dialog:MatDialog, private servicio:EventService) { }

  ngOnInit() {
    this.servicio.list().subscribe(
      (result: any) => {
        const items = [];
        for(let key of Object.keys(result)) {
          const aux = new Eventomodel(result[key].title, result[key].description);
          aux.$id = result[key].id;
          items.push(aux)
        }
        this.dataSource = items;
        console.log(items);
      },
      error => {this.dataSource = new MatTableDataSource()}
    );
  }

  onCreate() {
    this.dialog.open(EventocreateComponent, {
      data:{}
    });
  }

}
