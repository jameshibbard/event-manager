import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {

  @Input()
  events: Event[];

  @Output()
  remove: EventEmitter<Event> = new EventEmitter();

  constructor() {
  }

  onRemoveEvent(event: Event) {
    this.remove.emit(event);
  }
}
