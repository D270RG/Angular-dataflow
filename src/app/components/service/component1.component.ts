import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CustomService } from './custom.service';

@Component({
  selector: 'serviceComponent1',
  templateUrl: 'component1.component.html',
})
export class ServiceExample_Component1 implements OnInit {
  customService: CustomService;
  constructor(private service: CustomService) {
    this.customService = service;
  }

  sendMessage() {
    this.customService.sendMessage('Hello from component1');
  }
  sendError() {
    this.customService.sendError('Error from component1');
  }

  ngOnInit() {}
}
