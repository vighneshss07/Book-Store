import  Express  from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import './db.js'
import { AdminRouter } from './routes/auth.js'
import { studentRouter } from './routes/student.js'
import { bookRouter } from './routes/book.js'
import { Book } from "./models/Book.js"
import { Student } from "./models/student.js"
import { Admin } from "./models/Admin.js"

const app =Express()
app.use(Express.json())
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true,
}))
app.use(cookieParser())
dotenv.config()
app.use('/auth',AdminRouter)
app.use('/student',studentRouter)
app.use('/book',bookRouter)

app.get('/dashboard', async (req, res) => {
    try {
        const student = await Student.countDocuments()
        const admin = await Admin.countDocuments()
        const book = await Book.countDocuments()
        return res.json({ok: true, student, book, admin})
    } catch(err) {
        return res.json(err)
    }
})

app.listen(process.env.PORT, () => {
    console.log("server is Running")
})