import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	window.scrollTo(0,0);
  }

  ngAfterViewInit() {
  	console.log('ngAfterViewInit');
  }
}
