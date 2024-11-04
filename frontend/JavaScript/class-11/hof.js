// Using for loop
/*let arr1 = ["A","B","C","D"];
for(let i=0; i<arr1.length; i++ ){
    console.log(arr1[i]);
}*/

// Using forEach() loop
/*let arr = ["A","B","C","D"];
arr.forEach((x,y) => {
    console.log(x,y);
});*/

// map()   [Higher Order Function] [populated]
/*let arr = ["A","B","C","D","E","F"];
let arrName = arr.map((x,y) => {
    return x.toLowerCase();
});
console.log(arrName);*/

// filter out the odd number:
/*let numArray = [1,2,3,4,5,6,7,8,9,10];
const oddNumber = numArray.filter((x) => {
    return x % 2 !== 0;
});
console.log(oddNumber);*/

// Object
/*let student29 = {
    "mname": "Bhagyalaxmi",
    "age": 21,
    "city": "Kendrapara",
    "batch": "MCA",
    "roll": 23
};
console.log(student29["mname"],student29["age"],student29["city"],student29["batch"],student29["roll"]);*/

// Using Consructor
let student = new Object();
student.mname = "Bhagyalaxmi";
student.age = 21;
student.city = "Kendrapara";
student.batch = "MCA";
student.roll = 23;
console.log(student.mname);
console.log(student.age);
console.log(student.city);
console.log(student.batch);
console.log(student.roll);