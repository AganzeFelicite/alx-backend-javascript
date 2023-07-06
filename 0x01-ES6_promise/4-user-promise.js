/** *
 * this is a function that returns an object of {firstname : values,..}
 * once the promise resolves
 * -firstname: username
 * -lastname : lastname
 */

export default function signUpUser(firstName, lastName) {
  return Promise.resolve({ firstName, lastName });
}
