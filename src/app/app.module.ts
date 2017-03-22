import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { EventDataService } from './events/event-data.service';

import { AppRoutingModule } from './app-routing.module';
import { EventsComponent } from './events/events.component';
import { DetailComponent } from './events/detail/detail.component';
import { NewComponent } from './events/new/new.component';
import { EditComponent } from './events/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    DetailComponent,
    NewComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [EventDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
