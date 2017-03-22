import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Event } from './event';
import { EventDataService } from './event-data.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [EventDataService]
})
export class EventsComponent {

  constructor(
    private eventDataService: EventDataService,
    private router: Router) { }

  showEvent(id:number){
    this.router.navigate(['/events', id]);
  }

  get events() {
    return this.eventDataService.getAllEvents();
  }
}
