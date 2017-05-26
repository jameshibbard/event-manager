import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

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

  constructor(
    private eventDataService: EventDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => this.event = this.eventDataService.getEventById(+params['id'])
    );
    const picker = new Pikaday({
      field: document.getElementById('datepicker'),
      format: 'D MMMM YYYY'
    });
    picker.setDate(this.event.date);
  }

  updateEvent(form: NgForm){
    this.eventDataService.updateEventById(this.event.id, form.value)
    this.router.navigate(['/events']);
  }
}
