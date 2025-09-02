// let date = new Date()
// console.log(date.getTime())
// // console.log(date.toDateString())

// date.getTime()
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())
// console.log(date.getMilliseconds())

// console.log(date.getDay())
// console.log(date.getMonth())
// console.log(date.getFullYear())

// console.log(date.getUTCHours())

// console.log(date.toDateString())
// console.log(date.toTimeString())
// console.log(date.toLocaleDateString())
// console.log(date.toLocaleTimeString())

// let date = new Date()


// function calculateAge(userDob){

//     let dob = new Date(userDob)

//     let currentDate = new Date()

//     let difference = currentDate.getTime() - dob.getTime()

//     let years = (((((difference/1000)/60)/60)/24)/365)

//     return years 

    
// }

// console.log(calculateAge('2003-11-28'))


function calculateAge(userDob){
    let dob = new Date(userDob);
    let currentDate = new Date();

    let years = currentDate.getFullYear()-dob.getFullYear();

    let months = currentDate.getMonth()-dob.getMonth();

    let days = currentDate.getDate()-dob.getDate();

    if (days < 0){
        months--;
        let prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0){
        years--;
        months += 12;
    }

return `Santosh your age ${years} years, ${months} months, ${days} days`;

}

console.log(calculateAge('2003-11-28'))