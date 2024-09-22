const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Create Express app
const app = express();

// Enable CORS
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://theitamarmizrahi@gmail.com:123456@tasks.m5i0bys.mongodb.net/', {
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
  // Logic to create a new record
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
