import Building from './5-building';
/* eslint-disable */
export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    if (typeof floors !== 'number') throw new Error();
    super(sqft);
    this._floors = floors;

    this._sqft = sqft;
  }

  get floors() {
    return this._floors;
  }

  set floors(val) {
    this._floors = val;
  }

  set sqft(value) {
    this._sqft = value;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
