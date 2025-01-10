const router = require('express').Router();
let image = require('../models/Image');
const multer = require('multer');

// Configure multer storage and file handling
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Set upload folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname); // Set unique filename
    }
});

const upload = multer({ storage: storage });

// Create a new memory route, with file upload handling
router.route('/upload').post(upload.array('files', 10), (req, res) => {
    const category = req.body.category;
    const date = req.body.date;
    const fileName = req.files;
    const userId = req.body.userId;

    if (!category || !date || !fileName || !userId) {
        return res.status(400).json({ message: 'Memory name, date, and files are required' });
    }

    const newMemory = new image({
        category,
        date,
        fileName,
        userId
    });

    newMemory.save()
        .then(() => {
            res.json("Memory added successfully");
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ message: 'Error saving memory', error: err });
        });
});

module.exports = router;
