// custom module
const { log } = require("console");
const math = require("./math");
console.log(math.add(12, 40));
console.log(math.sub(12, 40));
console.log(math.mul(12, 40));
console.log(math.div(12, 40));
//inbuild module
const file = require("fs");
// fs module use for interact with file system
// fs stand for filesystem
file.writeFileSync("name.txt", "Bhagyalaxmi palai\n");
file.appendFileSync("name.txt", "Bikash Kumar Giri\n");
file.appendFileSync("name.txt", "Jinu\n");
file.appendFileSync("name.txt", "Papu\n");
file.appendFileSync("name.txt", "Sarathi Baba\n");
file.appendFileSync("name.txt", "Kendrapara\n");
const data = file.readFileSync("name.txt").toString();
console.log(data);