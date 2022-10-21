const express=require('express')
const userRoutes = require('./routes/userRoutes')
const foodRoutes=require('./routes/foodRoutes')
const app=express()
const connectDB=require('./db/db')
const foodRouter = require('./routes/foodRoutes')
const dotenv=require('dotenv').config()

app.use(express.json())
app.use('/api/users',userRoutes)
app.use('/api/searchFood',foodRoutes)


app.listen(5000,console.log('server running on 5000'))
