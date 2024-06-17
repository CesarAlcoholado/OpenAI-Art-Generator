require('dotenv').config();
const express = require("express");
const routes = require("./routes/api");

const app = express();

const port = process.env.PORT || 3000;

app.use('/openai', routes);

app.listen(port, ()=> console.log(`server is running at port ${port}`));