import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-box',
  templateUrl: './warning-box.component.html',
  styleUrls: ['./warning-box.component.scss']
})
export class WarningBoxComponent implements OnInit {

  @Input() title: string = 'N/A';
  @Input() subtitle: string = 'N/A';
  @Input() text: string = 'N/A';
  @Input() version: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
