/**
 * this a functiojn that imports the classsRoom class a create tree class returning
 * an array of classrooms
 */
/* eslint-disable import/extensions */
import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const obj1 = new ClassRoom(19);
  const obj2 = new ClassRoom(20);
  const obj3 = new ClassRoom(34);

  return [obj1, obj2, obj3];
}
