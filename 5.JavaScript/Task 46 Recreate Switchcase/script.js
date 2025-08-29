let num1 = Number(prompt("enter number 1"))
let num2 = Number(prompt("enter number 2"))

let choice = prompt("please select 1. Add 2. Sub 3. Multiply 4. division 5. modulus")

switch (choice) {
  case "1": console.log(num1 + num2);
    break;
  case "2": console.log(num1 - num2);
    break;
  case "3": console.log(num1 * num2);
    break;
  case "4": console.log(num1 / num2);
    break;
  case "5": console.log(num1 % num2);
    break;
  default: console.log('invalid choice please enter choice between (1 to 5) !')
}

let charch = prompt("enter char !")

switch (charch) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("is a vowel")
    break;
  default: console.log("is not a vowel !")
}