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
  qrPath!: string;
  qrCode = "https://hackkosice.com/images/events/hk19/arrival_registration_hu9c5b0c793d9bb1618b8c596bf6a17dfb_3125095_640x360_fill_q60_box_smart1.jpg";
  loading = true;
  constructor(private as: AppService) {}


  ngOnInit(): void {
    this.loading=false;
    this.as. getQRcode("goldvanula").subscribe((response: IQRcodeData) => {
      let responseData = response;
      this.qrPath=responseData.path;
      console.log(response);

    })

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
