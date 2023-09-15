const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;
const path = process.argv.length > 2 ? process.argv[2] : '';

function countStudents(path) {
  return new Promise((resolve, reject) => {
    if (!path) {
      reject(new Error('Cannot load the database'));
    }

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
        if (Object.hasOwn(fields, field)) {
          result += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
        }
      }
      result = result.trim();

      resolve(result);
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  let responseMessage = 'This is the list of our students\n';

  await countStudents(path)
    .then((result) => {
      responseMessage += result;
    })
    .catch(() => {
      responseMessage = 'This is the list of our students\nCannot load the database';
    });

  res.send(responseMessage);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
