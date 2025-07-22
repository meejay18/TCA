// Write a function that takes an array of numbers and returns a new array with each number doubled, but only if it’s greater than 10.
// const filteredNum = (arr) => {
//  return arr.map((el) => el * 2).filter((el) => el > 10);
// };
// console.log(filteredNum([2, 2, 4, 7, 12]));

// // Write a function that checks if a given name exists in an array of names and returns "Found" or "Not Found".
// const checkName = (arr) => {
//  const check = arr.includes('james');
//  return check ? console.log('found') : console.log('not found');
// };
// checkName(['martins', 'obi', 'tinubu', 'scholes', 'dawa']);

// // Write a function that returns the average of all the numbers in an array.
// const addition = (arr) => {
//  return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
// };
// console.log(addition([23, 12, 10, 34, 15]));

// // Write a function that takes an array of strings and returns a new array containing only the strings that start with a capital letter.
// const names = ['bugatti', 'Mercedes', 'ferrari', 'Kia', 'peugout', 'Porshe'];

// const firstLetter = (arr) => {
//  return arr.filter((el) => el[0] === el.charAt(0).toUpperCase());
// };
// console.log(firstLetter(names));

const children = ['sam', 'henry', 'bola', 'chinaza'];
const checkArray = (arr, name) => {
 if (arr.includes(name)) {
  return 'Found';
 } else {
  return 'Not found';
 }
};
console.log(checkArray(children, 'henry'));
console.log(checkArray(children, 'golden'));
console.log(checkArray(children, 'bola'));
console.log(checkArray(children, 'mije'));
