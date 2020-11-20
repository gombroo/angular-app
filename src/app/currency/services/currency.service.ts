import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  baseCurrency = 'EUR';

  constructor() { }

  getBaseCurrency(): string {
    return this.baseCurrency;
  }

  setBaseCurrency(newCurrency: string): void {
    this.baseCurrency = newCurrency;
  }
}
