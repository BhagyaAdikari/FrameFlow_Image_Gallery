const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const imageSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    category: { type: String, required: true },
    date:{type:Date},
    fileName: [{ type: String, required: true }],  // Changed to array of strings
    files: [{ type: String }]  // Assuming you're storing file paths
  });
  

const Image=mongoose.model("Image",imageSchema);

module.exports=Image;