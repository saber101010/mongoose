const mongoose = require ('mongoose')
require ('dotenv').config({path:'./config./env'})

const connectDB=async()=>{
    try {
        await  mongoose.connect("mongodb://127.0.0.1:27017/wsmongoose")
        console.log('db connected')
    } catch (error) {
        console.log('db not connected')
    }
}


module.exports=connectDB



