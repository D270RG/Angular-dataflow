import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'emitterComponent1',
  templateUrl: 'component1.component.html',
})
export class EmitterExample_Component1 implements OnInit {
  @Output() dataEvent: EventEmitter<string | Error>;

  constructor() {
    this.dataEvent = new EventEmitter<string | Error>();
  }
  sendMessage() {
    this.dataEvent.emit('Hello from component1');
  }
  sendError() {
    this.dataEvent.emit(new Error('Hello from component1'));
  }

  ngOnInit() {}
}
