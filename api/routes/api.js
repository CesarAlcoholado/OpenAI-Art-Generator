const express = require('express');
const { generateImage } = require('../controllers/openAiControllers');

const router = express.Router();

router.get('/', (req,res)=> {
  res.status(200).send("Hello World");
})

router.post('/images', generateImage);

module.exports = router;