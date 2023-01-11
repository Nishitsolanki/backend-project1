const mongoose = require('mongoose')

const resultschema = new mongoose.Schema({

    totalmarks:{
        type: Number,
        required:true,
        trim: true
    },

    studentid:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'students',
        required:true

    },


    resultstatus:{
        type:String,
        enum:['pass','fail']
    },


    }, {timestamps:true})

module.exports=mongoose.model('result',resultschema)