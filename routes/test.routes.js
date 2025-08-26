import express from "express"
import {testingcontroller} from "../controllers/test.controller.js"

const router = express.Router();


router.get('/',testingcontroller)

export default router;