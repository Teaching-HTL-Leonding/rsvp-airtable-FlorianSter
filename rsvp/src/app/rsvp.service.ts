import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Fields, Records } from './register/register.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RsvpService{

  constructor(private http: HttpClient) { }

  public add(fields: Fields): Observable<unknown>{
    const headers = {
      'Authorization': 'Bearer patPiSg0D1VZLcVOV.e694664f5610535f33403b9bb2b76940d0472b4af1653613719cd0d0e253cb25'
    };
    const body = {records: [{fields: fields}]};
    const url = 'https://api.airtable.com/v0/appF5e8kLPRPSywWQ/GuestsRegister';
    return this.http.post(url, body, {headers});
  }

  public list(): Observable<Records>{
    const headers = {
      'Authorization': 'Bearer patPiSg0D1VZLcVOV.e694664f5610535f33403b9bb2b76940d0472b4af1653613719cd0d0e253cb25'
    };
    const url = 'https://api.airtable.com/v0/appF5e8kLPRPSywWQ/GuestsRegister';
    return this.http.get<Records>(url, {headers});
  }
}
