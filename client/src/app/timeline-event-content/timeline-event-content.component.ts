import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { IEventList } from '../model/EventsData';

@Component({
  selector: 'app-timeline-event-content',
  templateUrl: './timeline-event-content.component.html',
  styleUrls: ['./timeline-event-content.component.scss'],
  animations: [
    trigger('appear', [
      state(
        'yes',
        style({
          opacity: 1,
        })
      ),
      state(
        'no',
        style({
          opacity: 0,
        })
      ),
      transition('* => *', [animate('0.3s')]),
    ]),
  ],
})
export class TimelineEventContentComponent implements OnInit {
  onScreen: boolean = false;
  @Input() eventL!: IEventList;

  onAppear() {
    this.onScreen = true;
    // console.log(this.onScreen);
  }

  get getAppear() {
    return this.onScreen ? 'yes' : 'no';
  }
  constructor() { }

  ngOnInit(): void {
    console.log(this.eventL);
    
  }

}
