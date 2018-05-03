import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  //.app-color <- Llamar a componente como clase <div class="app-color"></div>
  //[app-color] <- Llamar a componente como <div app-color></div>
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
