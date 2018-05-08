import { Component, OnInit, Input } from '@angular/core';
import { BreakpointState, BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isHandset: Observable <BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

  @Input () data : any;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
  }

}
