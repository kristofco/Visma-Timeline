import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';
import { IQRcodeData } from '../model/QRcodeData';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { IEventsData, IEventYearList } from '../model/EventsData';

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
  yearList: IEventYearList[] = [];
  constructor(private as: AppService, ) {}


  ngOnInit(): void {
    this.as.getEvents().subscribe((response: IEventsData)=>{
      let resData = response.yearList;                         
      for(let idx = 0; idx < resData.length; idx++){                
        let yearData = {} as IEventYearList;                              

        yearData.year = resData[idx].year;       
        yearData.eventList = resData[idx].eventList;
        
        this.yearList.push(yearData);                               
      }

    })


  }
}
