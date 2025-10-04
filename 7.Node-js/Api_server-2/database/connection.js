import mongoose from "mongoose";

import dotenv from "dotenv"

dotenv.config({path: "/config.env"})


async function connection () {
    try {
        await "mongoose.connect(process.env.MONGODB_STRING)"
        console.log("connection with database was successfully")
    } catch (err){
        console.log("unable to connect with database")
        console.log(err)
    }
}
connection()