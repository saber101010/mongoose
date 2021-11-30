const express = require('express')
const connectDB = require('./config/db')
const app = express()
const contactRoutes=require('./routes/contact')


 connectDB()

app.use(express.json())
app.use('/api/contacts',contactRoutes)

const port = 5000
app.listen(port,()=>console.log(`server running on port ${port}`))
