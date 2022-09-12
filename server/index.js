// Import the dependencies
const express = require("express");
const cors = require('cors');
const api = require('./api')
const path = require('path');

// Create an express server
const app = express();
const port = 8080;

// Body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//CORS
app.use(cors());

app.use("/api", api);

// Serve any static files
app.use(express.static(path.join(__dirname, '/client/build')));

// Handle React routing, return all requests to React app
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

// Start the server
app.listen(port, () => console.log(`Server listening at port ${port}`));