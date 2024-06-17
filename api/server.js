require('dotenv').config();
const express = require("express");
const routes = require("./routes/api");
const cors = require("cors");
const bodyParser = require ("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const app = express();

const port = process.env.PORT || 3000;

//parsing application/json
app.use(express.json());
//enable all request
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
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


app.use('/openai', routes);

app.listen(port, ()=> console.log(`server is running at port ${port}`));