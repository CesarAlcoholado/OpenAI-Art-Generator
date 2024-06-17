const express = require('express');
const { generateImage } = require('../controllers/openAiControllers');
;

const router = express.Router();

router.get('/', (req,res)=> {
  try {
    res.status(200).send("Hello World");
  } catch (error) {
    console.error(error)
  }
})

router.post('/images', generateImage);

module.exports = router;