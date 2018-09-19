import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  showCalendar = false;
  onCalendarSelectedChange() {
  	console.log('date changed');
  }
}
