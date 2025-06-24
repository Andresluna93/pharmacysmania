import app from './app.js'
import 'dotenv/config'; // Alternativa para ES modules
import {connectDB} from './db.js'

connectDB()
const puerto = process.env.PORT
app.listen(puerto)
console.log('server on port', puerto)