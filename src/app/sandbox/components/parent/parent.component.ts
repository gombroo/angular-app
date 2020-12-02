import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  value: number = 200;

  valueFromChild: number = null;

  buttonState: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  increase(): void {
    this.value = this.value + 1;
  }

  decrease(): void {
    this.value = this.value - 1;
  }

  handleValueFromChild($event: number): void {
    this.valueFromChild = $event;
  }

}
