import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-on-off',
  templateUrl: './button-on-off.component.html',
  styleUrls: ['./button-on-off.component.scss']
})
export class ButtonOnOffComponent implements OnInit {

  @Input()  buttonIsOn: boolean = false;
  @Output() buttonIsOnChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  toggle(): void {
    this.buttonIsOnChange.emit(!this.buttonIsOn);
  }

}
