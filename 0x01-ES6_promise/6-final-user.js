import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';
/**
 * waits for the promises to be settled before retruning
 * this format {all responses}
 * @param : firstname, lastname , filename
 */

export default function handleProfileSignup(firstName, lastName, fileName) {
  const arr = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  return Promise.allSettled(arr)
    .then((resultArr) => resultArr);
}
