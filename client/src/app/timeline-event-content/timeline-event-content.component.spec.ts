import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineEventContentComponent } from './timeline-event-content.component';

describe('TimelineEventContentComponent', () => {
  let component: TimelineEventContentComponent;
  let fixture: ComponentFixture<TimelineEventContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineEventContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineEventContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
