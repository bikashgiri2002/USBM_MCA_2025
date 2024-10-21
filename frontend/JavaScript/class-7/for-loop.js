// for(let i = 0; i < 5; i++) {
//     console.log(i);
// }
// for(let i = 1; i <= 5; i++) {
//     console.log(i);
// }
// //reverse print
// for(let i = 5; i > 0; i--) {
//     console.log(i);
// }
let sum = 0;
for(let i = 1; i <= 5; i++) {
    let ran = Math.floor(Math.random() * 6 + 1);
    sum += ran;
    console.log(`${i} random number is ${ran}`);
}
console.log();
console.log(`sum of the number is ${sum}`);
