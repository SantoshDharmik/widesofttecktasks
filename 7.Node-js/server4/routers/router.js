import express from "express"

import {GetHome, GetAbout, postSubmitForm} from "../controllers/controller.js"

let router = express.Router();

// these is for GET

router.get("/",GetHome);

router.get("/about",GetAbout);

// these is for POST
router.post("/submit-form",postSubmitForm)

export default router;