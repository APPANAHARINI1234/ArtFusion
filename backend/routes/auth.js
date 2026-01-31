// backend/routes/auth.js
import express from "express";
import bcrypt from "bcryptjs";
import { connectDB } from "../db.js";

const router = express.Router();

/* REGISTER */
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const db = await connectDB();
  const users = db.collection("users");

  const userExists = await users.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await users.insertOne({
    name,
    email,
    password: hashedPassword
  });

  res.json({ message: "User registered successfully" });
});

/* LOGIN */
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const db = await connectDB();
  const users = db.collection("users");

  const user = await users.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  res.json({
    message: "Login successful",
    user: {
      id: user._id,
      name: user.name,
      email: user.email
    }
  });
});

export default router;
