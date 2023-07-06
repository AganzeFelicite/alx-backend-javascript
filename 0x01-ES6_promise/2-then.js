/**
 * this is a function that receives a promise and
 * and perform some activities on the function
 */

export default function handleResponseFromAPI(promise) {
  promise.then(() => {
    console.log('Got a response from the API');
    return {
      status: 200,
      body: 'Success',

    };
  }).catch(new Error());
}
