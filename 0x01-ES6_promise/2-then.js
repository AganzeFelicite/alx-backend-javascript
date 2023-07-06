/**
 * this is a function that receives a promise and
 * and perform some activities on the function
 */

export default function handleResponseFromAPI(promise) {
  return promise.then(() => ({ status: 200, body: 'Success' })).catch(() => new Error()).finally(() => {
    console.log('Got a response from the API');
  });
}
