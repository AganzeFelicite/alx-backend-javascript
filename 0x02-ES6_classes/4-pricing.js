/** *
 * this is pricing class that implements
 * the currency class
 */

/* eslint-disable */
export default class Pricing{
    constructor(amount, currency){
        this._amount = amount;
        this._currency = currency;
        
    }
    get amount(){
        return this._amount;
    }
    
    set amount(amount){
        this._amount = amount;
    }

    get currency(){
        return this._currency;
    }

    set currency(currency){
        this._currency = currency;
    }
    
    displayFullPrice(){
        return `${this.amount} ${this.currency.displayFullCurrency()}`
    }

    converPrice(amount, conversionRate){
        return amount * conversionRate
    }
}