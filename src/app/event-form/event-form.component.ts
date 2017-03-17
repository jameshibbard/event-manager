import { Component, Output, EventEmitter } from '@angular/core';
import { Event } from '../event';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent {
  newEvent: Event = new Event();

  @Output()
  add: EventEmitter<Event> = new EventEmitter();

  constructor() { }

  addEvent() {
    // emit event
    this.add.emit(this.newEvent);
    this.newEvent = new Event();
  }

}
