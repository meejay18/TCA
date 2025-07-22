// 1.
const doubledArray = (arr) => {
 const newArray = arr.map((el) => el * 2).filter((el) => el > 10);
 return newArray;
};
console.log(doubledArray([2, 4, 6, 8]));
console.log(doubledArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 2.
const checkName = (arr) => {
 const check = arr.includes('bolaa');
 check ? console.log('found') : console.log('Not found');
 return check;
};
checkName(['prince', 'samuel', 'bola', 'jide']);

// 3.
const averageNumbers = (arr) => {
 const average = arr.reduce((a, b) => a + b) / arr.length;
 console.log(average);
};
averageNumbers([10, 65, 21, 4, 7]);
averageNumbers([2, 4, 6, 8, 10]);

// 4.
const capitalize = (arr) => {
 const newArray = arr.filter((el) => el[0] === el.charAt(0).toUpperCase());
 console.log(newArray);
};
capitalize(['Amaka', 'chioma', 'Adaeze', 'cynthia', 'Faruk']);
