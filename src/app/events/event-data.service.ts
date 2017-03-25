import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Event } from './event';
import { EVENTS } from './mock-events';

@Injectable()
export class EventDataService {
  events: Event[] = EVENTS;
  lastId: number = EVENTS.length;

  private eventsUrl = 'http://localhost:8000/api/events/';  // URL to web api

  constructor(private http: Http) {}

  getAllEvents(): Promise<Event[]> {
    return this.http.get(this.eventsUrl)
               .toPromise()
               .then(response => response.json())
               .then(data => data.map(this.toEvent))
               .catch(this.handleError);
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

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  private toEvent(obj) {
    return new Event({
      id: obj._id,
      type: obj.type,
      date: new Date(obj.date),
      title: obj.title,
      speaker: obj.speaker,
      host: obj.host,
    });
  }
}
