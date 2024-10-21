const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();

// CORS Configuration
const corsOptions = {
  origin: '*',  // Allow all origins. For production, replace '*' with your app's domain for better security.
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(express.json());  // Middleware to parse JSON requests

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:6TugeNc8GJJabuNB@cluster0.b99jb.mongodb.net/UsersDB?retryWrites=true&w=majority')
  .then(() => console.log('MongoDB connected successfully to UsersDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// User Schema for authentication
const userSchema = new mongoose.Schema({
  name: String, // Add name field to schema
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Registration Route
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    // Hash password and save new user with username as name
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name: username, email, password: hashedPassword }); // Changed username to name
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Registration error:', err); // Add error log here
    res.status(500).json({ message: 'Error registering user' });
  }
});

// Login Route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Fetch user from the database
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: 'Invalid credentials' });

  // Validate password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

  // Generate JWT token
  const token = jwt.sign({ id: user._id }, 'your_jwt_secret');
  res.status(200).json({ token, username: user.name });  // Make sure to include the username in the response
});

// Profile Route
app.get('/profile', async (req, res) => {
  try {
    // Extract token from the Authorization header and remove the 'Bearer ' prefix
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1]; // Get the token after 'Bearer '

    // Verify token
    const decoded = jwt.verify(token, 'your_jwt_secret');

    // Fetch the user using the decoded token data
    const user = await User.findById(decoded.id).select('-password'); // Exclude password

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Return the user's profile data
    res.json(user);
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(401).json({ message: 'Invalid token' });
  }
});

// Route to get all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find().select('-password'); // Exclude the password field
    res.json(users);  // Return all users
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ message: 'Error fetching users' });
  }
});

// Use the environment variable PORT or default to 8080 if running locally
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
