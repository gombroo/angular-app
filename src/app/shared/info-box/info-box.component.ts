import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent implements OnInit {
  // parent > child
  @Input() title: string = 'Jakiś tytuł';
  @Input() subtitle: string = 'Jakiś podtytuł';
  @Input() text: string = 'Jakiś tekst';
  @Input() version: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
