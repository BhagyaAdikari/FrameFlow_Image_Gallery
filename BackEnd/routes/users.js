const router = require("express").Router();
let User = require("../models/User");

// Create a user
router.route("/addUser").post((req, res) => {
  const { name, age, gender, password } = req.body;

  if (!name || !age || !gender || !password) {
    return res.status(400).json("All fields are required.");
  }

  const newUser = new User({
    name,
    age: Number(age),
    gender,
    password,
  });

  newUser
    .save()
    .then(() => {
      res.status(201).json("New user added");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ error: err.message });
    });
});

// Display all users
router.route("/users").get((req, res) => {
  User.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ error: err.message });
    });
});

// Update a user
router.route("/updateUser/:userId").put(async (req, res) => {
  const userId = req.params.userId;
  const { name, age, gender, password } = req.body;

  if (!name || !age || !gender || !password) {
    return res.status(400).json("All fields are required.");
  }

  const updateUser = {
    name,
    age,
    gender,
    password,
  };

  try {
    await User.findByIdAndUpdate(userId, updateUser);
    res.status(200).send({ status: "User updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ status: "Error updating user", error: err.message });
  }
});

// Delete a user
router.route("/deleteUser/:userId").delete(async (req, res) => {
  const userId = req.params.userId;

  try {
    await User.findByIdAndDelete(userId);
    res.status(200).send({ status: "User deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ status: "Error deleting user", error: err.message });
  }
});

// Get a user by ID
router.route("/get/:userId").get((req, res) => {
  const userId = req.params.userId;

  User.findById(userId)
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).send({ status: "User not found" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ status: "Error retrieving user", error: err.message });
    });
});

//Login User

router.route("/login").post(async (req, res) => {
  const {username, password} = req.body;

  try {
    const user = await User.findOne({name: username});
    if (user) {
      if (user.password === password) {
        res.json({message: "Success", userId: user._id});
      } else {
        res.json({message:"The password is wrong"});
      }
    } else {
      res.json({message:"No record existed"});
    }
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).json("Internal Server Error");
  }
});


module.exports = router;
