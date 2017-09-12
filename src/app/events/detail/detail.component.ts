import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { EventDataService } from '../event-data.service';
import { Event } from '../event';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  event: Event;

  constructor(
    private eventDataService: EventDataService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      params => this.eventDataService.getEventById(params['id']).then(event => {
        this.event = event;
      })
    );
  }

  delete(e:MouseEvent, event:Event): void{
    e.preventDefault();
    if (confirm("Are you sure?")) {
      this.eventDataService.deleteEventById(event.id);
      this.router.navigate(['/events']);
    }
  }
}
