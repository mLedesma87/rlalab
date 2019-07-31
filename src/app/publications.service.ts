import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Publication {
	urlDetail: string;
	pubTitle: string;
	citationsUrl: string;
	citations: number;
	year: number;
}

@Injectable({
  providedIn: 'root'
})

export class PublicationsService {

  constructor(private http: HttpClient) { }

  public getPublicationsJSON(): Observable<Publication[]> {
  	return this.http.get<Publication[]>('/assets/publications.json');
  }
}
