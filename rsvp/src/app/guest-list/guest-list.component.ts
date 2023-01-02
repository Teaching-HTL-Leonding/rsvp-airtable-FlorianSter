import { Component, OnInit } from '@angular/core';
import { Records } from '../register/register.component';
import { RsvpService } from '../rsvp.service';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})
export class GuestListComponent implements OnInit {
  public records!: Records;

  constructor(public guestListService: RsvpService){
  }

  ngOnInit(): void {
    this.guestListService.list().subscribe(x => {
      this.records = x;
    })
  }

  public getList(){
    return this.records.records;
  }

  public numOfGuests(){
    var numGuests= 0;
    for (let index = 0; index < this.records.records.length; index++) {
      if(this.records.records[index].fields.attend){
        numGuests++;
      }
      if(this.records.records[index].fields.additionalGuest){
        numGuests++;
      }
    }
    return numGuests;
  }
}
