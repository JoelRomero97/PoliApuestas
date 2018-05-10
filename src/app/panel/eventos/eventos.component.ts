import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { EventocreateComponent } from './eventocreate/eventocreate.component';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})

export class EventosComponent implements OnInit {

  displayedColumns = ['ID', 'Titulo', 'Descripcion'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }

  onCreate() {
    this.dialog.open(EventocreateComponent, {
      data:{}
    });
  }

}

export interface Element {
  ID: UUID;
  Titulo: string;
  Descripcion: string;
}

const ELEMENT_DATA: Element[] = [
  {ID: 1, Titulo: '1', Descripcion: 'H'},
  {ID: 2, Titulo: '2', Descripcion: 'He'},
  {ID: 3, Titulo: '3', Descripcion: 'Li'},
  {ID: 4, Titulo: '4', Descripcion: 'Be'},
  {ID: 5, Titulo: '5', Descripcion: 'B'},
  {ID: 6, Titulo: '6', Descripcion: 'C'},
  {ID: 7, Titulo: '7', Descripcion: 'N'},
];
