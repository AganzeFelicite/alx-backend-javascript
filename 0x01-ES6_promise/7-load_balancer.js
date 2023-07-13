/**
 * this is a function that returns the values of a promisew
 * that resolves first
 * @param chinaDownload - this is a promise
 * @param USDownload  - also is a promise
 */

export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload])
    .then((result) => result);
}
