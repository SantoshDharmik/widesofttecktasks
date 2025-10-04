import express from "express"

import { checkAdmin } from "../middlewares/checkAdmin.js"

import {getAllLanguages, getDetails, getFilterData, getRandomLanguage, getLanguageBasedOnId, postAddLanguages,deleteLanguage} from "../controllers/controller.js"

let router = express.Router()

router.get("/",(req,res) => {
    res.redirect('/get-details')
})
// we recive all the data 
router.get("/all", getAllLanguages)

//we rec all the details of data
router.get("/get-details", getDetails)

//we can use for filtering the data
router.get("/filter", getFilterData)

//it is select random  data from 1 to 50
router.get("/random/language",getRandomLanguage)

// path parameter to identify the id
router.get("/identity/:id" ,getLanguageBasedOnId)

//it is used for add new  languages
router.post("/add-languages", checkAdmin,postAddLanguages)

//it is used for deleting langauges with the help of id
router.delete("/deleting/:id",deleteLanguage)

export { router }