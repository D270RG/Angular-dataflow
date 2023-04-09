import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomService } from './custom.service';
import { CustomMessage, CustomError } from './custom.service';
@Component({
  selector: 'serviceComponent2',
  templateUrl: 'component2.component.html',
})
export class ServiceExample_Component2 implements OnInit {
  customService: CustomService;
  subscriptions: Subscription[] = [];
  data: string | Error;
  constructor(private service: CustomService) {
    this.customService = service;
    this.data = 'No data';
  }

  ngOnInit() {
    let subscription = this.service.onChange.subscribe({
      next: (object: CustomMessage) => {
        this.data = object.message;
        console.log(`Received message ${object.message}`);
      },
      error: (object: Error) => {
        this.data = object;
        console.log(`Received error ${object}`);
      },
    });
    this.subscriptions.push(subscription);
  }
  ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}
