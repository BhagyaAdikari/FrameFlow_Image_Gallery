const express = require("express");
const router = express.Router();
let Image = require("../models/Image"); // Assuming the path to your model
const multer = require("multer");
const mongoose = require('mongoose');
const path = require('path');

const app = express();




// Configure Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Route to upload files
router.post("/upload", upload.array("files"), async (req, res) => {
  try {
    const { userId, category,date } = req.body;

    // Extract file paths or names
    const fileNames = req.files.map((file) => file.filename); // Use `file.path` if you need full paths

    const newImage = new Image({
      userId,
      category,
      date,
      fileName: fileNames,
      files: fileNames, // Optional, based on your schema
    });

    await newImage.save();

    res.status(201).json({ message: "Files uploaded successfully" });
  } catch (error) {
    console.error("Error saving image:", error);
    res.status(500).json({ message: "Error occurred", error });
  }
});

// Route to get all images from user id

router.get("/get/:id", async (req, res) => {
  try {
    const id = req.params.id; // Get user ID from route params
    const images = await Image.find({ userId: id }); // Fetch images based on userId

    // Transform the data if needed
    const newImages = images.map((image) => {
      return {
        id: image._id,
        userId: image.userId,
        memory: image.category,
        files: image.files, 
        date:image.date// Array of filenames
      };
    });

    // Send the transformed data as a response
    res.status(200).json(newImages);
  } catch (error) {
    console.error("Error getting images:", error);
    res.status(500).json({ message: "Error occurred", error });
  }
});


router.get("/getMemory/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const imageId = req.params.id || req.body.id; // Ensure this is defined
if (!imageId || !mongoose.Types.ObjectId.isValid(imageId)) {
    return res.status(400).json({ error: "Invalid or missing image ID" });
}


    // Find the document by ID
    const image = await Image.findById(id);

    if (!image) {
      return res.status(404).json({ message: "Memory not found" });
    }

    // Transform the data if needed (but in this case, it seems unnecessary)
    const newImage = {
      id: image._id,
      userId: image.userId,
      memory: image.category,
      files: image.files,
      date:image.date 
      
      // Already an array, no need to modify
      
    };

    res.status(200).json(newImage);
  } catch (error) {
    console.error("Error getting images:", error);
    res.status(500).json({ message: "Error occurred", error });
  }
});


module.exports = router;
