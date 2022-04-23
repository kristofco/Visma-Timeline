import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-timeline-event',
  templateUrl: './timeline-event.component.html',
  styleUrls: ['./timeline-event.component.scss'],
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
export class TimelineEventComponent implements OnInit {
  // @Input() event?: any;
  onScreen: boolean = false;

  onAppear() {
    this.onScreen = true;
    // console.log(this.onScreen);
  }

  get getAppear() {
    return this.onScreen ? 'yes' : 'no';
  }
  // event:any = {
  //   title:"EVENT",
  //   ImgUrl:"url",
  // }

  constructor() {}

  ngOnInit(): void {}
}
