// nested loop
// a loop inside a loop is called nested loop
// let total = 0;
// for(let i = 1; i <= 5; i++) { // outer loop
//     for(let j = 1; j <= 2; j++) {// inner loop
//         console.log(`inner loop value ${j}`);
//         total++;
//     }
//     console.log(`outer value ${i}`);
// }
// console.log(`total no of ittretion = ${total}`);
for(let i = 1; i <= 5 ; i++) {
    let pattern = "";
    for(let j = 1; j <= i; j++) {
        pattern += "* "
    }
    console.log(pattern);
}