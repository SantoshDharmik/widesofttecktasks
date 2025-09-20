import express from "express"

import dotenv from "dotenv"

import ejs from "ejs"

import router from "./routers/router.js"

dotenv.config({path: "./config.env"})

let port = process.env.PORT || 4005

let app = express()

app.use(express.urlencoded({ extended: true }))

// app.use(express.static('public'))

app.set("view engine", "ejs")

app.use(router)

app.listen(port, () => {
console.log(`server is runnig on port ${port} http://localhost:4005/about`)
})