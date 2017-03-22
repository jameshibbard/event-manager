import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

import { EventDataService } from '../event-data.service';
import { Event } from '../event';

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
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      params => this.event = this.eventDataService.getEventById(+params['id'])
    );
  }

  updateEvent(form: NgForm){
    this.eventDataService.updateEventById(this.event.id, form.value)
    this.router.navigate(['/events']);
  }
}
