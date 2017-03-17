import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListFooterComponent } from './event-list-footer.component';

describe('EventListFooterComponent', () => {
  let component: EventListFooterComponent;
  let fixture: ComponentFixture<EventListFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventListFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
