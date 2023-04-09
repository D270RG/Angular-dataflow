import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-dataflow';
  data: string | Error;
  constructor() {
    this.data = 'No data';
  }
  setData(eventObject: string | Error) {
    this.data = eventObject;
  }
}
