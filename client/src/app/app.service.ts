import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IEventsData } from './model/EventsData';
import { IQRcodeData } from './model/QRcodeData';



@Injectable({
  providedIn: 'root'
})
export class AppService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {
   }

   getQRcode(ImageURL : string){
    return this.http.get<IQRcodeData>(this.baseUrl + 'QrCode?url='+ImageURL);
  }

  getEvents(){
    return this.http.get<IEventsData>(this.baseUrl+'Event');
  }
}
