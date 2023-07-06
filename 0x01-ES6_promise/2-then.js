/**
 * this is a function that receives a promise and
 * and perform some activities on the function
 */

export default function handleResponseFromAPI(promise) {
  const error = () => new Error();
  const successfull = () => ({ status: 200, body: 'Success' });
  const final = () => { console.log('Got a response from the API'); };
  promise.then(successfull).catch(error).finally(final);
}
