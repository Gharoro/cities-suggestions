/* eslint-disable eol-last */
const express = require('express');

const router = express.Router();
const AutoComplete = require('../../../controller/appController');

// @route   GET /suggestions
// @desc    Display cities matching search
// @access  Public
router.get('/', AutoComplete.auto_complete);

module.exports = router;