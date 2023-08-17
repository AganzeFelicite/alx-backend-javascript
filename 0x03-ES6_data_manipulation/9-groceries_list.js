/**
 * a function that returns a map datastructure of
 * grocceries
 */

export default function groceriesList() {
  const mapObj = new Map();
  mapObj.set('Appels', 10);
  mapObj.set('Tomatoes', 10);
  mapObj.set('Pasta', 1);
  mapObj.set('Rice', 1);
  mapObj.set('Banana', 5);
  return mapObj;
}
