import { prepareSyntheticListenerName } from '@angular/compiler/src/render3/util';
import { Component, OnInit, Input, Output, EventEmitter, Type } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() valueFromParent: number = null;
  @Output() valueFromChild: EventEmitter<number> = new EventEmitter<number>();

  value: number = 20;

  constructor() { }

  ngOnInit(): void {
  }

  increase(): void {
    this.value = this.value + 1;
    this.valueFromChild.emit(this.value);
  }

  decrease(): void {
    this.value = this.value - 1;
    this.valueFromChild.emit(this.value);
  }

}
