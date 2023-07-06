/**
 * this is a function that retuns a promise that has
 * arg1 : success a boolean and
 * returns an object on success and
 * a string on failuere
 */

export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success === true) {
      resolve(
        {
          status: 200,
          body: 'Success',

        },
      );
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
