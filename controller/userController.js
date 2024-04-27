// controllers/userController.js

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
let users = [];

const createUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    // Check if user with the same username already exists
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { id: users.length + 1, username, passwordHash: hashedPassword };
    users.push(newUser);
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
}

const loginUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username);
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user.id }, 'secret', { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    next(err);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createUser,
  loginUser,
  getAllUsers,
};
