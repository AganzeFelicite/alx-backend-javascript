/**
 * typed array return a buffer with a value on
 * a specific position
 */

export default function createInt8TypedArray(length, position, value) {
  if (typeof length !== 'number' || typeof position !== 'number' || typeof value !== 'number') throw new TypeError();
  const buffer = new ArrayBuffer(length);
  const view = new Int8Array(buffer);
  view[position] = value;

  return buffer;
}
