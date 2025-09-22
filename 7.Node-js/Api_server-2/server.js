import  express from "express"

import dotenv from "dotenv"

import {router} from "./routers/router.js"

dotenv.config({path: "./config.env"})

let app =  express()

let port = process.env.port || 4007

app.use(express.urlencoded({ extended: true}))

app.use(express.static("public"))

app.use("/languages/api", router)

app.use((req,res) => {
    console.log("someone is trying to access a 404 route ! ")
    res.status(404).json({ message: "content not found !" })
})

app.listen(port,() => {
    console.log(`server is running on port ${port}`)
})