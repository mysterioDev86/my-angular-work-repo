import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
//import { setInterval } from 'timers';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css']
})
export class DateTimeComponent implements OnInit {
  currentDateTimeStamp = null;
  constructor() { 
    setInterval(() => {
      // let currentDate = new Date();
      // this.currentDateTimeStamp = currentDate.toDateString() + " " + currentDate.toLocaleTimeString();
      this.currentDateTimeStamp = new Date();
     }, 1000);
  }

  ngOnInit(): void {
  }

}
