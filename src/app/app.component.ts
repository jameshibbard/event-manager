import {Component} from '@angular/core';
import {Event} from './event';
import {EventDataService} from './event-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EventDataService]
})
export class AppComponent {

  newEvent: Event = new Event();

  constructor(private eventDataService: EventDataService) {
  }

  addEvent() {
    this.eventDataService.addEvent(this.newEvent);
    this.newEvent = new Event();
  }

  removeEvent(e, event) {
    e.preventDefault();

    if(confirm("Are you sure?")){
      this.eventDataService.deleteEventById(event.id);
    }
  }

  get events() {
    return this.eventDataService.getAllEvents();
  }
}
