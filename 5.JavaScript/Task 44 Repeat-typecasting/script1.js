// type casting 
// imlicit type casting (perform by System(javascript))
// explicit type casting (itself)
// 1) number
//  
{console.log("NUMBER------------------")}
console.log("Number to string")
{let data = 123

console.log("before type casting of data was " + data + " it's data type was " + typeof (data))

data = String(data)

console.log("after type casting of data is " + data + " it's data type is " + typeof (data))}

console.log("Number to boolean")

// only 0 will be changed to false else true (0-false,and any other number is true )

{let data = 100

console.log("before type casting of data was " + data + " it's data type was " + typeof (data))

data = Boolean(data)

console.log("after type casting of data is " + data + " it's data type is " + typeof (data))}


let data = 0

console.log("before type casting of data was " + data + " it's data type was " + typeof (data))

data = Boolean(data)

console.log("after type casting of data is " + data + " it's data type is " + typeof (data))

// 2) String 

{console.log("STRING--------------")}
console.log("string to number")
{let data = "123"

console.log("before type casting of data was " + data + " it's data type was " + typeof (data))

data = Number(data)

console.log("after type casting of data is " + data + " it's data type is " + typeof (data))}

console.log("string to boolean")

{let data = "1"

    // if the data was empty is false else true 

console.log("before type casting of data was " + data + " it's data type was " + typeof (data))

data = Boolean(data)

console.log("after type casting of data is " + data + " it's data type is " + typeof (data))}

{let data = ""

    // if the data was empty is false else true 

console.log("before type casting of data was " + data + " it's data type was " + typeof (data))

data = Boolean(data)

console.log("after type casting of data is " + data + " it's data type is " + typeof (data))}

// 2) Boolean

{console.log("Boolean--------------")}
console.log("Boolean to number")
{let data = false

console.log("before type casting of data was " + data + " it's data type was " + typeof (data))

data = Number(data)

console.log("after type casting of data is " + data + " it's data type is " + typeof (data))}

{let data = true

console.log("before type casting of data was " + data + " it's data type was " + typeof (data))

data = Number(data)

console.log("after type casting of data is " + data + " it's data type is " + typeof (data))}


console.log("Boolean to string")

{let data = false

console.log("before type casting of data was " + data + " it's data type was " + typeof (data))

data = String(data)

console.log("after type casting of data is " + data + " it's data type is " + typeof (data))}

{let data = true

console.log("before type casting of data was " + data + " it's data type was " + typeof (data))

data = String(data)

console.log("after type casting of data is " + data + " it's data type is " + typeof (data))}



