//for user input using readline
// const readline = require('node:readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
//prime number 
let num = 2147483647;
let prime = true;
for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++ ) {
    if(num % i === 0) {
        console.log(`${num} is not a prime`);
        prime = false;
        return;
    }
}
if(prime) {
    console.log(`${num} is a prime number`);
}