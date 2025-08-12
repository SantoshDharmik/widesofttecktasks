console.log("Leap year")
let year = window.prompt("enter the year");
year = Number(year)

if (year % 400 == 0){
    console.log("it's leap year");
}else if (year % 100 == 0){
    console.log("Not a leap year");
}else if (year % 4 == 0){
    console.log("it's leap year");
}else {
    console.log("Not a leep year");
}