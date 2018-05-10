import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { NuevasApuestasComponent } from './nuevas-apuestas/nuevas-apuestas.component';

@Component({
  selector: 'app-apuestas',
  templateUrl: './apuestas.component.html',
  styleUrls: ['./apuestas.component.css']
})
export class ApuestasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
