// import module
import os from "os";
// console.log(os);
console.log(os.homedir());// C:\Users\girib
console.log(os.hostname());// Rupert
console.log(os.platform());// win32
console.log(os.release());// 10.0.26100
console.log(os.userInfo());// [Object: null prototype] {
//     uid: -1,
//     gid: -1,
//     username: 'girib',
//     homedir: 'C:\\Users\\girib',
//     shell: null
//   }
console.log(os.userInfo().username);
console.log(os.machine());
console.log(os.totalmem());
console.log(`Total memory : ${os.totalmem() / (1024 * 1024 * 1024) } GB`);
