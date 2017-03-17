import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EventDataService } from './event-data.service';
import { EventFormComponent } from './event-form/event-form.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventListItemComponent } from './event-list-item/event-list-item.component';
import { EventListFooterComponent } from './event-list-footer/event-list-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    EventFormComponent,
    EventListComponent,
    EventListItemComponent,
    EventListFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [EventDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
