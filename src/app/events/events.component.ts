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
export class EventsComponent implements OnInit {

  events: Event[];

  constructor(
    private eventDataService: EventDataService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEvents();
  }

  showEvent(id:number){
    this.router.navigate(['/events', id]);
  }

  getEvents(): void {
    this.eventDataService.getAllEvents().then(events => {
      console.log(events)
      this.events = events
    });
  }
}
