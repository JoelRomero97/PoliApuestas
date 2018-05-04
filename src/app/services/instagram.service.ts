import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class InstagramService 
{

  url : string = "https://api.instagram.com/oembed?url=http://instagr.am/p/fA9uwTtkSN/";

  constructor(public http: HttpClient)
  {
  }

  getFotos () : Observable <any>
  {
    return this.http.get(this.url);
  }

}
