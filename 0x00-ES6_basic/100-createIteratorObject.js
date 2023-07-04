export default function createIteratorObject(report) {
  let arr = [];
  for (const item of Object.values(report.allEmployees)) {
    arr = [...arr, ...item];
  }
  return arr;
}
