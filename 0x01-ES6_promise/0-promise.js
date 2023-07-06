/**
 * this a function that return a promise
 */

export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(4);
    }, 1000);
  });
}
