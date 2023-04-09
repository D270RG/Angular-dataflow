import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'emitterComponent2',
  templateUrl: 'component2.component.html',
})
export class EmitterExample_Component2 implements OnInit {
  @Input() data: string | Error;

  constructor() {
    this.data = 'No data';
  }

  ngOnInit() {}
}
