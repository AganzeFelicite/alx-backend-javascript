/**
 * this is a function that receives a promise and
 * and perform some activities on the function
 */

const error = () => new Error();
const successfull = () => ({ status: 200, body: 'Success' });
const final = () => { console.log('Got a response from the API'); };
export default function handleResponseFromAPI(promise) {
  promise.then(successfull).catch(error).finally(final);
}
