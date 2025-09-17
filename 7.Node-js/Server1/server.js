import express from "express"

import number from "./script2.js"

import number1 from "./script1.js"

import {data1, data2, doSomthing, doSomthing2} from "./script3.js"

import {sayHello as hi, sayBye as bye} from "./newas.js"

import * as newas from './newas.js'

let port = 4001


let app = express()
console.log(number)
console.log(number1)
doSomthing()
console.log(data1)
console.log(data2)
doSomthing2()
// import as /
console.log(hi("santosh"));
console.log(bye("santosh"));

console.log(newas.sayHello("Dharmik"));
console.log(newas.sayBye("Dharmik"));


app.get("/",(request,response) => {
    response.send("Got this message from backend !")
})

app.listen(port, () => {
    console.log(`server is runing on port ${port}`)
})