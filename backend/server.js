const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./db.config/db')
const {urlencoded} = require('body-parser')
const PORT = process.env.PORT || 6500
const cors = require('cors')

connectDB() 
const app = express()
app.use(cors());
app.use(express.json())
app.use(urlencoded({extended:false}))
app.use('/bookings', require('./routes/routes.js'))
app.use('/auth', require('./routes/authRoutes.js'))
// app.use('/getone', require('./routes/getoneroute.js'))

app.listen(PORT,() => {
    console.log(`server is running on ${PORT}`)
})