import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import authRoutes from './routes/auth.routes.js'
import alumnoRoutes from './routes/alumno.routes.js'

const app = express()

app.use(cors({
    origin: 'http://localhost:5173', //con origin le decimos que solo se puede conectar el localhost 5173!!
    credentials: true
}))
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())

app.use('/api',authRoutes)
app.use('/api', alumnoRoutes)

export default app
