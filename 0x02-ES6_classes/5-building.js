/**
 *
 * this is a class that creates an abstract method
 *  in a class
 */

/* eslint-disable */
export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') throw new Error();
    this._sqft = sqft;
    this.evacuationWarningMessage();
  }

  set sqft(value) {
    this._sqft = value;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    if (this.constructor.name !== 'Building') throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
