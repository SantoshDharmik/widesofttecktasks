// Password regex:
// At least one lowercase, one uppercase, one digit, one special char, min 8 length


// let passworRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// let matchString = "Skdharmik@1728"
// console.log(passworRegex.test(matchString))

// email regex:

let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

let matchString1 = "Svaysc1126"
let matchString2 = "santoshdharmik5@gmail.com"

console.log(emailRegex.test(matchString1))
console.log(emailRegex.test(matchString2))


