import {Injectable} from '@angular/core';
import {Event} from './event';

@Injectable()
export class EventDataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for events
  events: Event[] = [];

  constructor() {
  }

  // Simulate POST /events
  addEvent(event: Event): EventDataService {
    if (!event.id) {
      event.id = ++this.lastId;
    }
    this.events.push(event);
    return this;
  }

  // Simulate DELETE /events/:id
  deleteEventById(id: number): EventDataService {
    this.events = this.events
      .filter(event => event.id !== id);
    return this;
  }

  // Simulate PUT /events/:id
  // updateEventById(id: number, values: Object = {}): Event {
  //   const event = this.getEventById(id);
  //   if (!event) {
  //     return null;
  //   }
  //   Object.assign(event, values);
  //   return event;
  // }

  // Simulate GET /events
  getAllEvents(): Event[] {
    return this.events;
  }

  // Simulate GET /events/:id
  // getEventById(id: number): Event {
  //   return this.events
  //     .filter(event => event.id === id)
  //     .pop();
  // }
}
