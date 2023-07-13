/**
 * this is a function to divide that throws an error once one
 * devides by zero
 * @param {*} numerator 
 * @param {*} denominator 
 */

export default function divideFunction(numerator, denominator) {
 if (denominator === 0) throw Error("cannot divide by 0");
 return numerator / denominator;
}