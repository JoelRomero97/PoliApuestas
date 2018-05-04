import { Component } from '@angular/core';
import { InstagramService } from './services/instagram.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{

  foto : any;

  constructor (private servicio:InstagramService)
  {}

  getFotos () //Esta función manda a llamar a InstagramService
  {
    this.servicio.getFotos().subscribe(
      result => {console.log(result);
                this.foto = result.thumbnail_url
                console.log(this.foto)},
      error => {console.log(error)});
  }

  onCambia (variable)
  {
    alert(variable);
  }
}
