const autentication = (enteredData, callback) => {
    return callback(enteredData);
}
const verify = (userData) => {
    let user = "user";
    let admin = "admin"
    if(userData === user){
        return "he is a user";
    }else if (userData === admin) {
        return "he is a admin";
    }else {
        return "not a authorized persone";
    }
}
console.log(autentication("bikash", verify));