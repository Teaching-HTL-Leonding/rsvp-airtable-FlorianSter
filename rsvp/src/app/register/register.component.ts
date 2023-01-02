import { Component, OnInit } from '@angular/core';
import { RsvpService } from '../rsvp.service';


export interface Fields {
  guestName: string;
  attend: boolean;
  remark: string;
  additionalGuest: boolean;
  nameAddtionalGuest: string;
}
export interface Record{
  fields: Fields,
  id: string
}
export interface Records{
  records: Record[];
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {
  public currentItem!: Fields;

  ngOnInit(){
    this.currentItem = {
      additionalGuest: false,
      attend: false,
      guestName: '',
      remark: '',
      nameAddtionalGuest: ''
    };
  }

  constructor(public serviceRegister: RsvpService){
  }

  public add(){
    console.log(this.currentItem.guestName);
    this.serviceRegister.add(this.currentItem).subscribe(x => {
      this.ngOnInit();
    });
  }
}
