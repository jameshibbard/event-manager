import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EventDataService } from './events/event-data.service';
import { EventsComponent } from './events/events.component';
import { DetailComponent } from './events/detail/detail.component';
import { NewComponent } from './events/new/new.component';
import { EditComponent } from './events/edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'events',
    component: EventsComponent,
    children: [
      { path: 'new', component: NewComponent },
      { path: ':id', component: DetailComponent },
      { path: ':id/edit', component: EditComponent },
    ]
  }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
