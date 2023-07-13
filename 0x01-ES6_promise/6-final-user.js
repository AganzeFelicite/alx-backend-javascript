import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';
/**
 * waits for the promises to be settled before retruning
 * this format {all responses}
 * @param : firstname, lastname , filename
 */

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const result = [];
  try {
    const user = await signUpUser(firstName, lastName);
    result.push({ status: 'fulfilled', value: user });
  } catch (err) {
    result.push({ status: 'rejected', value: err.toString() });
  }
  try {
    const upload = await uploadPhoto(fileName);
    result.push({ status: 'fulfilled', value: upload });
  } catch (err) {
    result.push({
      status: 'rejected',
      value: err.toString(),

    });
  }
  return result;
}
