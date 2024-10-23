//ternary oporetor
//syntex -> bool ? true-statement : false-statement ;
// let output = (10 > 7) ? 10 : 7 ;
// console.log(output);
// const add = (a,b) => console.log("1st" + add(7,8));
// console.log(add(5,7)); // -> RangeError: Maximum call stack size exceeded (due to recursion)
const ad = (a,b) => a + b;
console.log(ad(7 , 8));
// bmi calculator
const bmiCalculator = (weight, height) => weight / (height ** 2);
console.log(bmiCalculator(46, 1.67));
const multipleParameter = (...number) => {
    console.log(number);
}
multipleParameter(1,2,3,4,5);