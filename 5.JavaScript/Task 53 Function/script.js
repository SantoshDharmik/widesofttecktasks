let num = prompt("Enter your number:");
let check = () =>{
    if (num>=0) {
  console.log("positive");
} else {
  console.log("negative");}
}

console.log(check);

function add_fun(number1,number2)
{
  let add;

  add=number1+number2;
  console.log("Addition :"+add)
  return add;
}

let first_num=Number(prompt("Enter first number :"));
let second_num=Number(prompt("Enter first number :"));

add_fun(first_num,second_num) 


function cube(number)
{
    mul=number*number*number
    console.log("Cube:"+mul);
    return mul;
}

let cube_num=Number(prompt("Enter the Number :"));

cube(cube_num)