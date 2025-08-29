console.log("binary search")
function binarySearch(arr, search) {

    let ub = arr.length - 1
    let lb = 0

    let steps = 0

    while (lb <= ub) {

        steps++

        let midpoint = parseInt((ub + lb) / 2)

        if (arr[midpoint] === search) {
            return `element ${search} found at position ${midpoint + 1} in ${steps} steps`
        }

        if (arr[midpoint] < search) {
            lb = midpoint + 1
        } else {
            ub = midpoint - 1
        }

    }

    return `element ${search} not found any positon in ${steps} steps !`

}

// 1 2 3 4 5 6 7 8 9 10 // length 10
// 0 1 2 3 4 5 6 7 8 9

// search 10

// while(lb <= ub)

// midpoint = (ub + lb)/2

// Array[midpoint] === searchvalue

// return

// if(arr[midpoint] < searchvalue){
//     lb = midpoint + 1
// }else{
//     ub = midpoint - 1
// }

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

let names = ["santosh", "bhavesh", "rohit", "sahil"]

console.log(linearSerach(numbers, 11))
console.log(binarySearch(numbers, 5))
console.log(binarySearch(names, "rohit"))
