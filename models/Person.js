const mongoose=require('mongoose');

const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number
    
    },
    rank:{
        type:String,
        enum:['yonko','sde'],
        required:true
    }


})

const Person=mongoose.model('Person',personSchema);

module.exports=Person;