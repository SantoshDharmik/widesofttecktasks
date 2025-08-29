let year = prompt("Enter a year:");
year = Number(year);

if (year % 400 === 0) {
  console.log(year + " is a Leap Year");
} else if (year % 100 === 0) {
  console.log(year + " is NOT a Leap Year");
} else if (year % 4 === 0) {
  console.log(year + " is a Leap Year");
} else {
  console.log(year + " is NOT a Leap Year");
}