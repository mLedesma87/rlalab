import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PublicationsService {

  constructor(private http: HttpClient) { }

  public getPublicationsJSON() {
  	return this.http.get('/assets/publications.json');
  }
}
