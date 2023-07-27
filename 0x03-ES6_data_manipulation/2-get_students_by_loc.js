/**
 * Filter an array object
 */

export default function getStudentsByLocation(arr, city) {
  if (!Array.isArray(arr) || typeof city !== 'string') throw new TypeError();
  return arr.filter((item) => item.location === city);
}
