/**
 * perform a synchronous operation
 * in node
 */
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.toString().trim().split('\n').slice(1);

      let count = 0;

      const fields = {};

      lines.forEach((line) => {
        count += 1;

        const studentRecord = line.split(',');

        if (!(studentRecord[3] in fields)) fields[studentRecord[3]] = [];

        fields[studentRecord[3]].push(studentRecord[0]);
      });
      let result = `Number of students: ${count}\n`;

      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          result += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
        }
      }
      result = result.trim();

      console.log(result);

      resolve(result);
    });
  });
}
module.exports = countStudents;
