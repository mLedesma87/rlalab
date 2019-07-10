import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RlalabComponent } from './rlalab/rlalab.component';
import { PeopleComponent } from './people/people.component';
import { ResearchComponent } from './research/research.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
	{ path:'', redirectTo: 'rlalab', pathMatch:'full' },
	{ path:'rlalab', component: RlalabComponent },
	{ path:'research', component: ResearchComponent },
	{ path:'contact', component: ContactComponent },
	{ path:'people', component: PeopleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
