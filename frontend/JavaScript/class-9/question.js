//simple calculater
const calculater = (num1, num2, operation) => {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "invelid operartion";
  }
};
let output = calculater(1, 2, "-");
console.log(output);
