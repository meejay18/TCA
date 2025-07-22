// Array methods
// map method
// const students = ['mary', 'sam', 'gideon', 'ruth'];
// console.log(students.map((el) => el + ' lucy'));

// const numbers = [40, 50, 70, 90];

// console.log(numbers.map((el) => el * 3));

// write a function that takes an array of numbers, and multiplies them by the length of the array
// 160 200 280 360

// const numbers = [40, 50, 70, 90];
// const multiplication = (arr) => {
//  console.log(arr.length);

//  return arr.map((num) => num * arr.length);
// };
// console.log(multiplication(numbers));

// const capitalize = (arr) => {
//  const capital = arr.map((el) => el.slice(0, 1).toUpperCase() + el.slice(1));
//  console.log(capital);
// };
// capitalize(students);

// reduce method
// const numbers2 = [40, 50, 70, 90, 70, 40];

// const reduceTest = (arr) => {
//  return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
// };
// console.log(reduceTest(numbers2));

// conditionals

// const name = 'sam';
// const password = 56;
// const username = 'samwise';

// if (name !== 'sam' && password === 56) {
//  console.log('incorrect name');
// } else if (name === 'sam' && password === 56) {
//  console.log('login successfully');
// } else if (name === 'sam' && password !== 56) {
//  console.log('incorrect password');
// }

// filter method

// template literals
const os = require('os');
const practice1 = () => {
  const first = os.cpus()[0].model;
  console.log(first);
};
practice1();

function checkName() {
  const name = 'mije';
  console.log(name);
}
checkName();
