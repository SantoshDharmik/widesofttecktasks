import express from "express"

import dotevn from "dotenv"

import router from "./routers/router.js";

dotevn.config({path: "./config.env" })

let app = express()

let port = process.env.PORT 


app.use(router)

app.listen(port, () => {
    console.log(`server is runing on port ${port} !`)
})