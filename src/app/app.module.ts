import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RlalabComponent } from './rlalab/rlalab.component';
import { PeopleComponent } from './people/people.component';
import { ResearchComponent } from './research/research.component';
import { ContactComponent } from './contact/contact.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AgmCoreModule } from '@agm/core';
import { SocialsComponent } from './socials/socials.component';
import { PublicationsComponent } from './publications/publications.component';


@NgModule({
  declarations: [
    AppComponent,
    RlalabComponent,
    PeopleComponent,
    ResearchComponent,
    ContactComponent,
    SocialsComponent,
    PublicationsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyChB9tyiPclEYKwwLh7WVPDjeEbLrqVOU0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
