
function linearSerach(arr, search) {

    let flag = false

    let steps = 0

    for (let index = 0; index < arr.length; index++) {

        steps++

        if (arr[index] === search) {
            flag = true
        }

        if (flag) {
            return `element ${search} found at position ${index + 1} in ${steps} steps`
        }

    }

    return `element ${search} not found at any position in ${steps} steps`

}

let string = "Santosh dharmik"

let nameArray = string.split("")

console.log(nameArray)

console.log(linearSerach([1,2,3,4,5,6,7,8,10,11,12],50))

console.log(linearSerach([1,2,3,4,5,6,7,8,10,11,12],5))

console.log(linearSerach(["sk","rohit","sahil"],"sk"))