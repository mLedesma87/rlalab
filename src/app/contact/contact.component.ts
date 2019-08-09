import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  public map: any = { lat: 51.4997693, lng: -0.1756972 };
  
  constructor() { }

  ngOnInit() {
  }

}
