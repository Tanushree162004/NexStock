const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../model/UserModel");

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

// Signup
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const userExist = await UserModel.findOne({ email });
  if (userExist) return res.status(400).json({ message: "User exists" });

  const hashed = await bcrypt.hash(password, 10);
  const newUser = new UserModel({ name, email, password: hashed });
  await newUser.save();

  res.status(201).json({ message: "User created" });
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1d" });
  res.json({ token });
});

module.exports = router;
