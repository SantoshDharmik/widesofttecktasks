let num = Number*(prompt("Enter a Number"))
let temp = num;
let reverse = 0;

do {
    let digit = temp % 10;        
    reverse = reverse * 10 + digit;    
    temp = Math.floor(temp / 10);      
} while (temp > 0);

if (num === reverse) {
    console.log(num + " is a Palindrome");
} else {
    console.log(num + " is NOT a Palindrome");
}