import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit {

  @ViewChild('jakiskomponent') nowyKomponent: any;

  constructor() { }

  ngOnInit(): void {
  }

  odpalIncreaseWKomponencieParent(): void {
    this.nowyKomponent.increase();
  }

  odpalDecreaseWKomponencieParent(): void {
    this.nowyKomponent.decrease();
  }

  wartoscZChild(): void {
    alert('' +this.nowyKomponent.valueFromChild);
  }

}
