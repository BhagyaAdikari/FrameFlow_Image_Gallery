const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const imageSchema=new Schema({
    fileName:{
        type:String,
        required:true //Backend validation
    },

    category:{
        type:String,
        required:true
    },

    date:{
        type:Date,
        required:true
    },

    userId:{
        type:String,
        required:true
    }
})

const Image=mongoose.model("Image",imageSchema);

module.exports=Image;