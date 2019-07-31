import { Component, OnInit } from '@angular/core';
import { PublicationsService, Publication } from '../publications.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss'],
})

export class PublicationsComponent implements OnInit {
  
  publications:Publication[] = [];

  constructor( private publicationsService : PublicationsService ) { }

  ngOnInit() {
  	this.publicationsService.getPublicationsJSON().subscribe(data => {
  		this.publications = data;
  	})
  }

}
