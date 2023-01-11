const mongoose = require ('mongoose')

const userschema = new mongoose.Schema({

    name:{
        type: String,
        required: true
        
    },
    age:{
        type:Number,
        required:true
        
        
    },
    mark1:{
        type: Number,
        required:true
    },

    mark2:{
        type:Number,
        required: true
    },
    mark3:{
        type:Number,
        required:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    }

    }, {timestamps:true})

module.exports=mongoose.model('students',userschema)