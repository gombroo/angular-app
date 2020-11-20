import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  constructor(private currency: CurrencyService) { }

  ngOnInit() {
    console.log('Show base currency: ', this.currency.getBaseCurrency() );
    this.currency.setBaseCurrency('TEST CURRENCY');
  }

}
