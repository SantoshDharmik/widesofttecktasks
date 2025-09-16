let btn1 = document.querySelector("#btn");
let body = document.querySelector("body");
let curMode = "light";

btn1.addEventListener("click", () => {
   if(curMode === "light"){
    curMode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
   } else{
    curMode = "light";
    body.classList.add("light")
    body.classList.remove("dark")
   }
   console.log(curMode);
});
// santosh //