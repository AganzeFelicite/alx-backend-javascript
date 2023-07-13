/**
 * this function accepts a function  parameter and
 * returns the functions is return once it executed
 * else an errom message
 * the return values are in the array
 * @param {is s function} mathFunction
 */

export default function guardrail(mathFunction) {
  const queue = [];
  let math;
  try {
    math = mathFunction();
  } catch (err) {
    math = err.toString();
  }
  queue.push(math);
  queue.push('Guardrail was processed');
  return queue;
}
