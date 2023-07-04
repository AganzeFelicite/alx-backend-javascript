export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  for (const item of array) {
    arr.push(appendString + item);
  }
  return arr;
}
