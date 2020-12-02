import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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


// export class NazwaKlasy {
//   value: number = 0;
//   yearr: 1920;

//   constructor() { }

//   year: number = 2000;
//   month: string = "May";
//   city: string = 'Warsaw';
//   day: number = 23;
//   country: any = {
//     name: 'Polska',
//     people: 34000000,
//     capital: 'Warsaw',
//   }

//   costam: any = {
//     cos: 'dfadfa',
//     cosss: 'dfadfazd',
//   }

//   jakasMetoda():void {
//     this.year = 3000;
//     this.country.name = "Bulgaria";
//     this.day = this.year - 1;
//   }

//   innaMetoda() {
//     this.year = this.year + 1;
//   }

//   cosTam():boolean {
//     this.year = 2020;
//     return this.year>100
//   }

//   printName(par: number) {
//     this.city = 'New York';
//   }

//   newFunc() {
//     return this.printName(2);
//   }
// }
