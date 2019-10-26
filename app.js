/* eslint-disable eol-last */
/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


const app = express();

// Cors middleware
app.use(cors());

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route File
const suggestions = require('./routes/api/v1/suggestions');

// API Documentation
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Use Route
app.use('/api/v1/suggestions', suggestions);

const port = process.env.PORT || 3700;
app.listen(port, () => console.log(`App running on port ${port}`));