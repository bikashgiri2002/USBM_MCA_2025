//callback function
//when a function is passed as an an argument is called callback function
const add = (a, b) => a + b;
const minus = (a, b ) => a - b;
const multi = (a, b) => a * b;
const devied = (a, b) => a / b;

const calculater = (value1, value2, callback) => callback(value1, value2);
console.log(calculater(10, 20, add));