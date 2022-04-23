import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface IQRdata{
  ImageURL:string;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {
   }

   getQRcode(ImageURL : string){
    return this.http.get<IQRdata>(this.baseUrl + 'FearAndGreed/Get?limit='+ImageURL);

  }
}
