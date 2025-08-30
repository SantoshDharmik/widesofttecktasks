

let choice = false
do {
    let year = Number(window.prompt("enter year to check !"))

    if (year % 100 == 0) {
        if (year % 400 == 0) {
            console.log(year + " is a leap year !")
        } else {
            console.log(year + " is not a leap year !")
        }
    } else if (year % 4 == 0) {
        console.log(year + " is a leap year !")
    } else {
        console.log(year + " is not a leap year !")
    }

    choice = window.confirm("do you wish to continue yes/no")

} while (choice)