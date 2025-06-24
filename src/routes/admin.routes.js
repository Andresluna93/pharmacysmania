import {Router} from "express"
import {getStudents} from "../controllers/adminController.js"

const router = Router()

router.get("/registros",getStudents)

export default router