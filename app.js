/* eslint-disable eol-last */
/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

// Controller
const AutoComplete = require('./controller/appController');

// Cors middleware
app.use(cors());

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Home Page
app.get('/suggestions', AutoComplete.auto_complete);


const port = process.env.PORT || 3700;
app.listen(port, () => console.log(`App running on port ${port}`));