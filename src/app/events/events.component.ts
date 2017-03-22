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

  //newEvent: Event = new Event();
  // events: Event[];

  constructor(
    private eventDataService: EventDataService,
    private router: Router) { }

  // addEvent() {
  //   this.eventDataService.addEvent(this.newEvent);
  //   this.newEvent = new Event();
  // }

  // removeEvent(event) {
  //   this.eventDataService.deleteEventById(event.id);
  // }

  // getEvents(): void {
  //   this.eventDataService.getEvents()
  //     .then(events => this.events = events);
  // }

  //ngOnInit(): void {
    //this.eventDataService.getAllEvents();
  //}
  showEvent(id:number){
    this.router.navigate(['/events', id]);
  }

  get events() {
    return this.eventDataService.getAllEvents();
  }
  // deleteEvent(e:MouseEvent, event:Event): void{
  //   e.preventDefault();
  //   if(confirm("Are you ssure?")){
  //     this.eventDataService.deleteEventById(1);
  //   }
  // }
}
