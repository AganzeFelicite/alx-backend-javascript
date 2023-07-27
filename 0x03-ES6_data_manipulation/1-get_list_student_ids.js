/**
 * creating a function that returns an
 * array of the ids keys u must use map()
 */

// const Obj = new Map();
// Obj.set({id: 1, firstName: 'Guillaume', location: 'San Francisco'});
// Obj.set({ id: 2, firstName: 'James', location: 'Columbia' });
// Obj.set({ id: 5, firstName: 'Serena', location: 'San Francisco' });

export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.map((student) => student.id);
}
