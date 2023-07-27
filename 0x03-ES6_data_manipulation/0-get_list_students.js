/**
 * a function to return an array of objects
 */

export default function getListStudents() {
  class Obj {
    constructor(id, firstName, location) {
      this.id = id;
      this.firstName = firstName;
      this.location = location;
    }
  }

  const obj1 = new Obj(1, 'Guillaume', 'San Francisco');
  const obj2 = new Obj(2, 'James', 'Columbia');
  const obj3 = new Obj(5, 'Serena', 'San Francisco');

  return [obj1, obj2, obj3];
}
