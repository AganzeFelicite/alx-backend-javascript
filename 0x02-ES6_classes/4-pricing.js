import Currency from './3-currency';
/**
 * this is pricing class that implements
 * the currency class
 **
 /

/* eslint-disable import/extensions no-underscore-dangle */
/* eslint-disable  no-underscore-dangle */
export default class Pricing {
  constructor(amount, currency) {
    if (typeof (amount) !== 'number' || !(currency instanceof Currency)) throw new Error();
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${new Currency(this._currency.code, this._currency.name).displayFullCurrency()}`;
  }

  static converPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') throw new Error();
    return amount * conversionRate;
  }
}
