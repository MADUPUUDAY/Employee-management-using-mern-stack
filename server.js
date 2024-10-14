const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(express.json());  // This is necessary if you handle JSON data in your API routes

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'frontend/build')));

// API routes
app.get('/api/employees', (req, res) => {
    // Example API logic, replace with your actual data fetching logic
    res.json([
        { id: 1, name: 'John Doe', position: 'Software Engineer' },
        { id: 2, name: 'Jane Smith', position: 'Project Manager' }
    ]);
});

// Catch-all handler for requests that don't match an API route
// Sends back React's index.html file for frontend routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
