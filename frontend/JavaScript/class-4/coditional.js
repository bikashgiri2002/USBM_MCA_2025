//conditional statement
// false values are : false, 0, -0, "", '', ``, null, undefine, NaN
console.log("discount start if toatl bill is more than 999 you get 10% ");
let totalBill = 999;
console.log(`total bill = ${totalBill}`);
if(totalBill >= 999) {
    totalBill = totalBill - totalBill * 0.1;
}
console.log(`final bill = ${totalBill}`);