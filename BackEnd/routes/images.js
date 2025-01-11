const express = require("express");
const router = express.Router();
let Image = require("../models/Image"); // Assuming the path to your model
const multer = require("multer");

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
    const { userId, category } = req.body;

    // Extract file paths or names
    const fileNames = req.files.map((file) => file.filename); // Use `file.path` if you need full paths

    const newImage = new Image({
      userId,
      category,
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

module.exports = router;
