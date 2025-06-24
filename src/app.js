import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import authRoutes from './routes/auth.routes.js'

const app = express()

app.use(cors())
app.use(morgan('dev'))//sirve para visualizar las peticiones del backend
app.use(express.json())//para que el servidor interprete json

app.use("/api",authRoutes)

export default app;