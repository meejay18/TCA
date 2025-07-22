// core modules
// third party modules
// local modules

const fs = require('fs')

// const os = require('os');

// const total = os.totalmem();
// const remainder = os.freemem();

// const result = total - remainder;
// console.log(result);

// const newData = 'This is the new data';
// const newFile = fs.writeFile('./test.txt', newData, 'utf-8', (err, data) => {
//  if (err) {
//   return err.message;
//  } else {
//   data;
//  }
// });
// return newFile;

// console.log(fs);

// const read = fs.readFile('./newFile.txt', 'utf-8', (err, data) => {
//  if (err) {
//   console.log('Error reading file', err.message);
//  } else {
//   console.log(data);
//  }
// });

// const fruits = ['apple', 'apricot', 'banana', 'blueberry', 'cherry'];
// const challenge = (arr) => {
//  let obj = {};
//  const result1 = arr.filter((el) => el[0] == 'a');
//  const result2 = arr.filter((el) => el[0] == 'b');
//  const result3 = arr.filter((el) => el[0] == 'c');

//  obj = {
//   a: result1,
//   b: result2,
//   c: result3,
//  };

//  return {
//   a: result1,
//   b: result2,
//   c: result3,
//  };
// };
// console.log(challenge(fruits));
// const fruits = ['apple', 'apricot', 'banana', 'blueberry', 'cherry'];
// const newChallenge = (arr) => {
//  const firstLetter = arr.reduce((acc, curr) => {} curr[0].toLowerCase());

//  const check = acc[firstLetter];

// };
// newChallenge(fruits);

// 1.
// const message = 'My name is Digban Mijoghene';
// const newFile = fs.appendFile(
//  './message.txt',
//  message,
//  'utf-8',
//  (err, data) => {
//   if (err) {
//    console.log('Error creating file', err.message);
//   } else {
//    console.log(data);
//   }
//  }
// );

// // 2.
// fs
//  .appendFile('./result.txt', String(message.length), 'utf-8', (err, data) => {
//   if (err) {
//    console.log('Error creating second file', err.message);
//   } else {
//    console.log(data);
//   }
//  })
//  .readFile('./result.txt');

// // 3.
// fs.unlink('./message.txt', (err, data) => {
//  if (err) {
//   console.log('Error deleting file', err.message);
//  } else {
//   console.log(data);
//  }
// });

// fs.writeFile(
//  './text.txt',
//  'My name is Mijoghene Digban',
//  'utf-8',
//  (err, data) => {
//   if (err) {
//    console.log(err.message);
//   } else {
//    console.log(data);
//   }
//  }
// );

// fs.readFile('./text.txt', 'utf-8', (err, data) => {
//  if (err) {
//   console.log(err);
//  } else {
//   const result = data.split(' ').length.toString();
//   console.log(result);
//   fs.writeFile('./new.txt', result, 'utf-8', (err, data) => {
//    if (err) {
//     console.log(err);
//    }
//   });

//   fs.appendFile('./new.txt', ' appended file', 'utf-8', (err, data) => {
//    if (err) {
//     console.log(err);
//    }
//   });
//  }
// });

// fs.unlink('./text.txt', (err, data) => {
//  if (err) {
//   console.log(err);
//  }
// });
const os = require('os')
fs.mkdir('../logs', (err) => {
  if (err) {
    console.log(err)
  } else {
    fs.writeFile(
      '../logs/system-info.txt',
      `Platform: ${os.platform()}\n Architecture: ${os.arch()}\nTotal Memory: ${(
        os.totalmem() /
        1024 ** 3
      ).toFixed(2)} GB\n CPU info: ${os.cpus()[0].model} Uptime: ${os.uptime() * 1000}`,
      'utf-8',
      (err, data) => {
        if (err) {
          console.log(err.message)
        } else {
          console.log(data)
        }
      }
    )
  }
})
