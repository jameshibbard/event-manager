import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class EditComponent implements OnInit, OnDestroy {

  event: Event;

  private sub: any;

  constructor(
    private eventDataService: EventDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.event = new Event();

    const picker = new Pikaday({
      field: document.getElementById('datepicker'),
      format: 'D MMMM YYYY'
    });

    this.sub = this.route.params.subscribe(
      params => {
        this.eventDataService.getEventById(params['id']).then((event: Event) => {
          this.event = event;
          picker.setDate(event.date);
        });
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  updateEvent(form: NgForm){
    this.eventDataService.updateEventById(this.event.id, form.value)
    this.router.navigate(['/events']);
  }
}
