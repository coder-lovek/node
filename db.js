const mongoose=require('mongoose')
const mongoURL='mongodb://127.0.0.1:27017/hotels'

mongoose.connect(mongoURL)

const db=mongoose.connection;

db.on('connected',()=>{
    console.log("db connected");
})
db.on('error',(err)=>{
    console.log("db connected error",err);
})
db.on('disconnected',()=>{
    console.log("db disconnected");
})

module.exports=db;