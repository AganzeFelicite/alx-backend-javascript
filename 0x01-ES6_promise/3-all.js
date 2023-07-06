import { uploadPhoto, createUser } from './utils';
/**
 * this function manages the
 * user profile and signup from the promises in the\
 * file utils
 */

export default function handleProfileSignup() {
  const promises = [uploadPhoto(), createUser()];
  Promise.all(promises)
    .then((resultArr) => {
      console.log(`${resultArr[0].body} ${resultArr[1].firstName} ${resultArr[1].lastName}`);
    })
    .catch(() => (console.log('Signup system offline')));
}
