import express from 'express'
import connectDB from './database/db.js';
import dotenv from 'dotenv'
import route from './routes/route.js';
import cors from 'cors'
import bodyParser from 'body-parser';

const app = express()

dotenv.config()

app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))

app.use(cors())

app.use('/',route)

const PORT = 8000;

const userName= process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

// database connection
connectDB(userName,password)

app.listen(PORT,()=>console.log(`server is running successfully on port ${PORT}`))