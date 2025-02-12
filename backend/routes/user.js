const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { authenticateToken } = require("./userAuth");

//Sign Up
router.post("/sign-up", async (req, res) => {
  try {
    const { username, email, password, address } = req.body;

    //check for username length is more than 3
    if (username.length < 4) {
      return res
        .status(400)
        .json({ message: "usernmae length should be greater than 3" });
    }

    //check username already exist ?
    const existingUsername = await User.findOne({ username: username });
    if (existingUsername) {
      return res.status(400).json({ message: "usernmae already exist" });
    }

    //check email already exist ?
    const existingEmail = await User.findOne({ email: email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already exist" });
    }

    //password validation
    if (password.length <= 5) {
      return res
        .status(400)
        .json({ message: "Password length should be greater than 5" });
    }
    const hashPass = await bcrypt.hash(password, 10);
    const newUser = new User({
      username: username,
      email: email,
      password: hashPass,
      address: address,
    });
    await newUser.save();
    return res.status(200).json({ message: "Signup Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error " });
  }
});

//Sign In
router.post("/sign-in", async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });
    if (!existingUser) {
      return res.status(400).json({ message: "Invalid Username" });
    }

    await bcrypt.compare(password, existingUser.password, (err, data) => {
      if (data) {
        const authClaims = [
          { name: existingUser.username },
          { role: existingUser.role },
        ];
        const token = jwt.sign({ authClaims }, "bookStore123", {
          expiresIn: "30d",
        });
        res.status(200).json({
          id: existingUser._id,
          role: existingUser.role,
          token: token,
        });
      } else {
        res.status(400).json({ message: "Invalid Password" });
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error " });
  }
});

//get-user-information
router.get("/get-user-information", authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const data = await User.findById(id).select("-password");
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Internal server error " });
  }
});

//update address
router.put("/update-address", authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const { address } = req.body;
    await User.findByIdAndUpdate(id, { address: address });
    return res.status(200).json({message: "Address updated Successfully"});
  } catch (error) {
    res.status(500).json({ message: "Internal server error " });
  }
});

module.exports = router;

// {
//     "username" :"testy1",
//     "email" :"testy1@gmail.com",
//     "password" :"test24",
//     "address" :"tests"
// }

//admin
// {
//     "username" :"admin",
//     "email" :"admin@gmail.com",
//     "password" :"admin123",
//     "address" :"admin"
// }
