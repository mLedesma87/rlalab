import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  public map: any = { lat: 51.4997627, lng: -0.1778798 };
  
  constructor() { }

  ngOnInit() {
  }

}
