import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../event';

@Component({
  selector: 'app-event-list-item',
  templateUrl: './event-list-item.component.html',
  styleUrls: ['./event-list-item.component.css']
})
export class EventListItemComponent {

  @Input() event: Event;

  @Output()
  remove: EventEmitter<Event> = new EventEmitter();

  constructor() {
  }

  onRemoveEvent(e, event: Event) {
    e.preventDefault();

    if(confirm("Are you sure?")){
      this.remove.emit(event);
    }
  }

}
