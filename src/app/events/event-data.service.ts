import { Injectable } from '@angular/core';

import { Event } from './event';
import { EVENTS } from './mock-events';

@Injectable()
export class EventDataService {
  events: Event[] = EVENTS;
  lastId: number = EVENTS.length;

  getAllEvents(): Event[] {
    return this.events;
  }

  // GET /events/:id
  getEventById(id: number): Event {
    return this.events
      .filter(event => event.id === id)
      .pop();
  }

  // Simulate POST /events
  addEvent(event: Event): EventDataService {
    if (!event.id) {
      event.id = ++this.lastId;
    }
    this.events.push(event);
    return this;
  }

  // Simulate PUT /events/:id
  updateEventById(id: number, values: Object = {}): Event {
    let event = this.getEventById(id);
    if (!event) {
      return null;
    }
    Object.assign(event, values);
    return event;
  }

  // DELETE /events/:id
  deleteEventById(id: number): EventDataService {
    this.events = this.events
      .filter(event => event.id !== id);

    return this;
  }
}


// import {Injectable} from '@angular/core';
// import {Event} from './event';

// @Injectable()
// export class EventDataService {

//   lastId: number = 0;
//   events: Event[] = [];

//   constructor() { }

//   // Simulate POST /events
//   addEvent(event: Event): EventDataService {
//     if (!event.id) {
//       event.id = ++this.lastId;
//     }
//     this.events.push(event);
//     return this;
//   }

//   // Simulate DELETE /events/:id
//   deleteEventById(id: number): EventDataService {
//     this.events = this.events
//       .filter(event => event.id !== id);
//     return this;
//   }

//   // Simulate PUT /events/:id
//   updateEventById(id: number, values: Object = {}): Event {
//     let event = this.getEventById(id);
//     if (!event) {
//       return null;
//     }
//     Object.assign(event, values);
//     return event;
//   }

//   // Simulate GET /events
//   getAllEvents(): Event[] {
//     return this.events;
//   }

//   // Simulate GET /events/:id
//   getEventById(id: number): Event {
//     return this.events
//       .filter(event => event.id === id)
//       .pop();
//   }

// }

