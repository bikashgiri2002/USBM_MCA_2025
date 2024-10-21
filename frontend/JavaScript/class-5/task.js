const readline = require("readline");
// console.log(readline);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let yourName;
rl.question("Enter your name : ", (input1) => {
    yourName = input1;
    console.log(yourName);
    rl.close();
});
