const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/workout", 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}!`)
});

// Route files not made yet, will continue tomorrow.
app.use(require("./routes/index.js"));
app.use(require('./routes/api.js'));