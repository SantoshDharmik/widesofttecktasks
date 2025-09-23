import express from 'express'

import router from "./routers/router.js"

import dotenv from 'dotenv'

// import { gethome } from './controllers/controller.js'

// import { gethome } from './controllers/controller.js

dotenv.config({path: "./config.env"})

let app = express()

let port = process.env.port || 5006

app.use(router);

app.listen(port,() => {
    console.log(`surver is runnig on port ${port}`)
})