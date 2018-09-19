import { Component,  ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent {
  selectedDate;
  minDate = new Date();
  onCalendarSelectedChange(date) {
  	this.selectedDate = date;
  }

}
