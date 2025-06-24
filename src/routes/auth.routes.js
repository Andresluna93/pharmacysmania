import {Router} from 'express'
import {login, register, logout, registerStudent, registerEmbajador} from '../controllers/authController.js'
import {studentSchema} from '../schemas/studentSchema.js'
import {embajadorSchema} from '../schemas/embajadorSchema.js'
import {validateSchema} from '../middlewares/validator.middleware.js'

const router = Router()

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)
router.post('/estudiante',validateSchema(studentSchema), registerStudent)
router.post('/embajador',validateSchema(embajadorSchema), registerEmbajador)

export default router