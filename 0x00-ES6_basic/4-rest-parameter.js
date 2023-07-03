export default function returnHowManyArguments(...args) {
  let total = 0;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < args.length; i++) {
    total += 1;
  }
  console.log(total);
}
