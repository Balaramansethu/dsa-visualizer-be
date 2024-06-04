const express = require('express');
const router = express.Router();

const { bubblesortFunction } = require('../controllers/bubblesortController');

router.get('/', bubblesortFunction);

module.exports = router;
