// Query parameter 
import express from "express"

import { gethome, postHome } from "../controllers/controller.js"

let router = express.Router();

router.get("/home",gethome)

router.post("/api/:name/:phone/:age/:address/:email", postHome);

export default router;
