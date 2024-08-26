require("dotenv").config();
const express = require('express');
const studentsRouter = require('./routes/students/students.js');

const db = require("./db/index");
// Create the app
const app = new express();
app.use(express.json());

db();

// Use the students router
app.use('/students', studentsRouter);

// Start the server on port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});
