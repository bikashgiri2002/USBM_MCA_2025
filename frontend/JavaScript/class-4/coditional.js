//conditional statement
// false values are : false, 0, -0, "", '', ``, null, undefine, NaN
console.log("task 1");
console.log("discount start if toatl bill is more than 999 you get 10% ");
let totalBill = 999;
console.log(`total bill = ${totalBill}`);
if(totalBill >= 999) {
    totalBill = totalBill - totalBill * 0.1;
}
console.log(`final bill = ${totalBill}`);
console.log("\n");
console.log("task 2");
let a = 60;
if(a >= 60) {
    console.log("Senior citizens");
}else if(a >= 18) {
    console.log("adult");
}else{
    console.log("teen");
}
console.log("\n");
console.log("task 3");
let gender = "male";
let age = 22;
if(gender == "male") {
    if(age >= 22) {
        console.log("he can marry");
    }else{
        console.log("he can't marry now");
    }
}else{
    console.log("she is a female");
}