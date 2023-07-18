/**
 * implementing a class
 */

export default class HolbertonCourse {
  constructor(name, length, student) {
    if (typeof (name) !== 'string') {
      throw new Error("Name must be a string");
    } else if (typeof (length) !== 'number') {
      throw new Error("Length must be a number");
    } else if (!Array.isArray(student)) {
      throw new Error("Students must be an array of strings");
    }
    /* eslint-disable */
    this._name = name;
    this._length = length;
    this._student = student;
  }

  get name() {
    return this._name;
  }

  get lenght() {
    return this._length;
  }

  get student() {
    return this._student;
  }

  set name(name) {
    if (typeof (name) !== 'string') {
      throw new Error("Name must be a string");
    }
    this._name = name;
  }

  set lenght(lenght) {
    if (typeof (length) !== 'number') {
      throw new Error("Length must be a number");
    }
    this._length = lenght;
  }

  set student(student) {
    if (!Array.isArray(student)) {
      throw new Error("Students must be an array of strings");
    }
    this._student = student;
  }
}
