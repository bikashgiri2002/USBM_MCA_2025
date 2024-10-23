//simple calculater
const calculater = (num1, num2, operation) => {
    switch(operation) {
        case '+' :
            return num1 + num2 ;
            break;
        case '-' :
            return num1 - num2 ;
            break;
        case '*' :
            return num1 * num2 ;
            break;
        case '/' :
            return num1 / num2 ;
            break;
        default :
            console.log("invelid operartion");
    }
}
let output = calculater(1,2,"-");
console.log(output);