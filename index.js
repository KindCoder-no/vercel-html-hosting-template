// Import express
const express = require('express');

// Create Express app
const app = express();

// Set Public directory
app.use(express.static(__dirname + '/public'))

// Define Port
const port = 3000

// Listen on defined port
app.listen(port, () => {
    console.log(`Web server started`)
})