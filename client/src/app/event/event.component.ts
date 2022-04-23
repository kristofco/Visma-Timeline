import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
  currentRate = 0;
  readonly = false;
  imageObject: Array<object> = [
    {
      image:
        'https://hackkosice.com/images/events/hk19/arrival_registration_hu9c5b0c793d9bb1618b8c596bf6a17dfb_3125095_640x360_fill_q60_box_smart1.jpg',
      thumbImage:
        'https://hackkosice.com/images/events/hk19/arrival_registration_hu9c5b0c793d9bb1618b8c596bf6a17dfb_3125095_640x360_fill_q60_box_smart1.jpg',
      alt: 'Image 1',
    },
    {
      image:
        'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
      thumbImage:
        'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
      alt: 'Image 2',
    },
    {
      image:
        'https://hackkosice.com/images/events/hk19/arrival_registration_hu9c5b0c793d9bb1618b8c596bf6a17dfb_3125095_640x360_fill_q60_box_smart1.jpg',
      thumbImage:
        'https://hackkosice.com/images/events/hk19/arrival_registration_hu9c5b0c793d9bb1618b8c596bf6a17dfb_3125095_640x360_fill_q60_box_smart1.jpg',
      alt: 'Image 3',
    },
    {
      image:
        'https://hackkosice.com/images/events/hk19/arrival_registration_hu9c5b0c793d9bb1618b8c596bf6a17dfb_3125095_640x360_fill_q60_box_smart1.jpg',
      thumbImage:
        'https://hackkosice.com/images/events/hk19/arrival_registration_hu9c5b0c793d9bb1618b8c596bf6a17dfb_3125095_640x360_fill_q60_box_smart1.jpg',
      
    },
    {
      image:
        'https://hackkosice.com/images/events/hk19/arrival_registration_hu9c5b0c793d9bb1618b8c596bf6a17dfb_3125095_640x360_fill_q60_box_smart1.jpg',
      thumbImage:
        'https://hackkosice.com/images/events/hk19/arrival_registration_hu9c5b0c793d9bb1618b8c596bf6a17dfb_3125095_640x360_fill_q60_box_smart1.jpg',
      // title: 'Image 5',
      alt: 'Image 5',
    },
    {
      image:
        'https://hackkosice.com/images/events/hk19/arrival_registration_hu9c5b0c793d9bb1618b8c596bf6a17dfb_3125095_640x360_fill_q60_box_smart1.jpg',
      thumbImage:
        'https://hackkosice.com/images/events/hk19/arrival_registration_hu9c5b0c793d9bb1618b8c596bf6a17dfb_3125095_640x360_fill_q60_box_smart1.jpg',
      //  title: 'Image 6',
      alt: 'Image 6',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
