import {Component} from '@angular/core';
import {Event} from './event';
import {EventDataService} from './event-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {

  constructor(private eventDataService: EventDataService) {
  }

  onAddEvent(event: Event) {
    this.eventDataService.addEvent(event);
  }

  onRemoveEvent(event: Event) {
    this.eventDataService.deleteEventById(event.id);
  }

  get events() {
    return this.eventDataService.getAllEvents();
  }
}
