
let start = 2000
let org_start = start
let end = 2025

let count = 0

while (start <= end) {
    let year = start
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            count++
            console.log(year)
        }
    } else if (year % 4 == 0) {
        count++
        console.log(year)
    }
    start++
}

console.log("their are total " + count + " leap year in range of " + org_start + " to " + end + " !")