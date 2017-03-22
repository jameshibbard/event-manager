import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';

import { EventDataService } from '../event-data.service';
import { Event } from '../event';

import * as Pikaday from 'pikaday';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  event: Event;
  newDate: Date;

  constructor(
    private eventDataService: EventDataService,
    private route: ActivatedRoute,
    private router: Router,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => this.event = this.eventDataService.getEventById(+params['id'])
    );
    const picker = new Pikaday({
      field: document.getElementById('datepicker'),
      format: 'D MMMM YYYY'
    });
  }

  // Horrible, horrible ...
  // http://stackoverflow.com/a/37634150/1136887
  // Binding directly to ngModel caused list of events to be dynamically updated
  updateDate(dateString: string){
    this.newDate = new Date(dateString);
  }

  updateEvent(form: NgForm){
    if (this.newDate) form.value.date = this.newDate

    this.eventDataService.updateEventById(this.event.id, form.value)
    this.router.navigate(['/events']);
  }
}
