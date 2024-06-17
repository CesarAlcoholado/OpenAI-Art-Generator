const express = require('express');
const { generateImage } = require('../controllers/openAiControllers');
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

const router = express.Router();

//parsing application/json
app.use(express.json());

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin"
    // "https://dynamic-presentation-card-6bjh.vercel.app"
  ); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

router.get('/', (req,res)=> {
  try {
    res.status(200).send("Hello World");
  } catch (error) {
    console.error(error)
  }
})

router.post('/images', generateImage);

module.exports = router;