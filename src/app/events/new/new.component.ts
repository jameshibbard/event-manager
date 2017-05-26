import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EventDataService } from '../event-data.service';
import { Event } from '../event';

import * as Pikaday from 'pikaday';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  newEvent: Event = new Event();
  formInvalid: boolean;

  constructor(private eventDataService: EventDataService) { }

  ngOnInit(): void {
    const picker = new Pikaday({
      field: document.getElementById('datepicker'),
      format: 'D MMMM YYYY'
    });
  }

  createNewEvent(){
    // Oh dear! Probably need to figure out how forms work.
    //
    const values = Object.keys(this.newEvent).map(key => this.newEvent[key]);
    if(values.includes("") || values.includes(undefined)){
      this.formInvalid = true;
    } else {
      this.eventDataService.addEvent(this.newEvent);
      this.formInvalid = false;
      this.newEvent = new Event();
    }
  }
}
