import express from "express"

import {getAllLanguages, getDetails, getFilterData, getRandomLanguage, getLanguageBasedOnId} from "../controllers/controller.js"

let router = express.Router()

router.get("/",(req,res) => {
    res.redirect('/get-details')
})

router.get("/get-details", getDetails)

router.get("/filter", getFilterData)

router.get("/random/language",getRandomLanguage)

router.get("/all", getAllLanguages)

// path parameter 
router.get("get-language/:id" ,getLanguageBasedOnId)

export { router }