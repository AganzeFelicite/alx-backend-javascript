/* eslint-disable */
export default class HolbertonClass {
  constructor(size, location) {
    this._location = location;
    this._size = size;
  }

  get location() {
    return this._location;
  }

  set location(val) {
    this._location = val;
  }

  get size() {
    return this._size;
  }

  set size(val) {
    this._size = val;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'string') {
      return this.location;
    }
    if (hint === 'number') {
      return this.size;
    }

    return this;
  }
}
