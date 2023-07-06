/**
 * is a function that return a promise on reject
 * with the "$fileName cannot be processed"
 * @param {string} filename
 */

export default function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`));
}
