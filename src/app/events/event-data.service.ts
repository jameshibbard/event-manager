import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Event } from './event';

@Injectable()
export class EventDataService {
  events: Event[];

  private eventsUrl = 'http://localhost:8000/api/events';  // URL to web api

  constructor(private http: Http) {}

  getAllEvents(): Promise<Event[]> {
    return this.http.get(this.eventsUrl)
               .toPromise()
               .then(response => response.json())
               .then(data => data.map(this.toEvent))
               .then(events => this.events = events)
               .catch(this.handleError);
  }

  getEventById(id: number): Promise<Event> {
    return this.http.get(`${this.eventsUrl}/${id}`)
               .toPromise()
               .then(response => response.json())
               .then(this.toEvent)
               .catch(this.handleError);
  }

  addEvent(event: Event): Promise<Event> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.eventsUrl, JSON.stringify(event), { headers })
               .toPromise()
               .then(response => response.json())
               .then(this.toEvent)
               .then(event => this.events.push(event))
               .catch(this.handleError);
  }

  updateEventById(id: number, values: Object = {}): Promise<void> {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      
      const event: Event = this.events.filter(ev => ev.id === id).pop();

      return this.http.put(`${this.eventsUrl}/${id}`, JSON.stringify(values), { headers })
                .toPromise()
                .then(() => {
                  const updatedEvent = this.toEvent(values);
                  updatedEvent.id = id;

                  const index = this.events.indexOf(event);
                  this.events.splice(index, 1, updatedEvent);
                })
                .catch(this.handleError);
    }

  deleteEventById(id: number): Promise<void> {
    const event: Event = this.events.filter(ev => ev.id === id).pop();
    return this.http.delete(`${this.eventsUrl}/${id}`)
               .toPromise()
               .then(() => {
                 const index = this.events.indexOf(event);
                 this.events.splice(index, 1);
               })
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  private toEvent(obj): Event {
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
