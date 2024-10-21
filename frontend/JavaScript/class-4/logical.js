// &(and), ||(or), !(not)
let ch = "a";
if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
  console.log("it's a vowel");
} else {
  console.log("it's a consonant");
}
switch (ch) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("it's a vowel");
    break;
  default:
    console.log("it's a consonant");
}
let dayNo = 1;
switch (dayNo) {
  case 1:
    console.log("it's a sunday");
    break;
}
