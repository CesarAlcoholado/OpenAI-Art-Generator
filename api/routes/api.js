const express = require('express');
const { generateImage } = require('../controllers/openAiControllers');

const router = express.Router();

router.post('/images', generateImage);

module.exports = router;