const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// Create Express app
const app = express();
// Middleware for JSON POST requests
app.use(express.json());
const UserSchema = new mongoose.Schema({
  username: String,
  password: String
});

const User = mongoose.model('User', UserSchema);


// Enable CORS
app.use(cors());
const dotenv = require('dotenv');
dotenv.config();
console.log(process.env.MONGO_URI);
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Define your API routes here
// Create a new record
app.post('/api/records', (req, res) => {
  const { username, password } = req.body;

  // Logic to save the username and password to MongoDB
  // Assuming you have a User model defined using Mongoose
  const User = mongoose.model('User');
  const newUser = new User({ username, password: bcrypt.hashSync(password, 10) });
  // const newUser = new User({ username, password });

  newUser.save()
    .then(() => {
      res.status(201).json({ message: 'User created successfully' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to create user' });
    });
});

// Read all records
app.get('/api/records', (req, res) => {
  // Logic to retrieve all records
});

// Read a single record
app.get('/api/records/:id', (req, res) => {
  // Logic to retrieve a single record by ID
});

// Update a record
app.put('/api/records/:id', (req, res) => {
  // Logic to update a record by ID
});

// Delete a record
app.delete('/api/records/:id', (req, res) => {
  // Logic to delete a record by ID
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
