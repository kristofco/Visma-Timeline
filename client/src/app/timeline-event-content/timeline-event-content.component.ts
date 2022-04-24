import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { IEventList } from '../model/EventsData';
import { DomSanitizer } from '@angular/platform-browser';
import { AppService } from '../app.service';
import { IQRcodeData } from '../model/QRcodeData';

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
  qrPath: string = "";

  onAppear() {
    this.onScreen = true;
    // console.log(this.onScreen);
  }

  get getAppear() {
    return this.onScreen ? 'yes' : 'no';
  }
  constructor(private sanitizer:DomSanitizer, private as: AppService) { }

  ngOnInit(): void {
    this.as.getQRcode(this.eventL.eventName).subscribe((response: IQRcodeData) => {
      let responseData = response;        
      this.qrPath="data:image/png;base64,"+responseData.bitmap;
      // console.log(response);
    })
   
  }
    
  transform(path: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(path);
    }
  }


