/**
 * this is a funcrtion that return a  object of
 * a resolved promise
 */
import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
//   const promise = [createUser(), uploadPhoto()];
//   return Promise.all(promise)
//     .then((resultArr) => ({
//       photo: resultArr[1],
//       user: resultArr[0],
//     }))
//     .catch(() => ({
//       status: null,
//       user: null,

  //     }));
  try {
    return {
      photo: await createUser(),
      user: await uploadPhoto(),
    };
  } catch (e) {
    return {
      photo: null,
      user: null,
    };
  }
}
