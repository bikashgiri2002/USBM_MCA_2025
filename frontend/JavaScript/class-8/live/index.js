//function 
function printName(name, age , city) {
    console.log(`My name is ${name}`);
    console.log(`My age is ${age}`);
    console.log(`My city is ${city}`);
}
printName("bhagya",21,"Sarathipara");

function detailsPrint(name, age , city) {
    return `i'm ${name}, age = ${age}, city = ${city}`;
}
console.log(detailsPrint("jinu", 21, "Sarathigada"));
// arrow function
//before declaration
//console.log(myName("jinu")); -> ReferenceError: Cannot access 'myName' before initialization
const myName = (name) => {
    return `my name ${name}`;
}
//after declaretion 
console.log(myName("jinu"));