// Import the dependencies
const express = require("express");
const cors = require('cors');
const api = require('./api')

// Create an express server
const app = express();
const port = 8080;

// Body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//CORS
app.use(cors());

app.use("/api", api);

// Start the server
app.listen(port, () => console.log(`Server listening at port ${port}`));