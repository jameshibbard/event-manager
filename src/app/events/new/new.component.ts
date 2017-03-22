import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EventDataService } from '../event-data.service';
import { Event } from '../event';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {

  newEvent: Event = new Event();

  constructor(private eventDataService: EventDataService) {}

  createNewEvent(){
    this.eventDataService.addEvent(this.newEvent);
    this.newEvent = new Event();
  }
}
