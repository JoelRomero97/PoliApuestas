import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color',
  //.app-color <- Llamar a componente como clase <div class="app-color"></div>
  //[app-color] <- Llamar a componente como <div app-color></div>
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  @Input() color : string;
  @Output() cambia = new EventEmitter();
  title: string = '2';
  arreglo = [];

  constructor() { }

  ngOnInit() {
  }

  onSubmit (variable)
  {
    console.log(variable);
    this.arreglo.push(variable.value.title);
    console.log(this.arreglo);
  }

  onClick ()
  {
    // alert(this.color);
    this.cambia.emit(this.color);
    this.title="algo";
  }

  cubo (variable)
  {
    return Math.pow (variable, 3);
  }

}
