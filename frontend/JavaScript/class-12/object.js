// let person = {
//   name: "bikash",
//   age: 22,
// };
// const man = new Object();
// person.city = "bhubaneswar";
// console.log(person);
// //let make a stident nested object
// let student = {
//   name: "bhagya",
//   age: 21,
//   roll: 2305274024,
//   address: {
//     //this's object inside object
//     city: "sarathigada",
//     po: "manyabar",
//   },
// };
//social media comment secton
let user = {
  name: "Bikash",
  mail: "biku@gamil.com",
  commets: [
    { id: "bhagya", message: "nice photo", time: new Date(), like: 20 },
    { id: "anjan", message: "good photo", time: new Date(), like: 2 },
    { id: "abhipsha", message: "very good photo", time: new Date(), like: 23 },
    { id: "rakesh", message: "good looking photo", time: new Date(), like: 89 },
  ],
  like: 100,
};
console.log(`User Name is ${user.name}`);
console.log("comments are : ");
console.log();
user.commets.forEach((e) => {
    console.log(`user name : ${e.id}`);
console.log(`comment : ${e.message}`);
console.log(
  `comment Time : ${e.time.getHours()} : ${e.time.getMinutes()} : ${e.time.getSeconds()}`
);
console.log(e.like);
console.log();
})
let student = {
    name : "bhagya",
    greet : function () {
        console.log(`hello ${this.name}`);
    },
    dispaly : () => {
        console.log(`hello ${this.name}`);
    }
}
//student.greet;
student.greet();
student.dispaly();// it's shows hello undefine as arrow function has block scope