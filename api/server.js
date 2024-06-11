require('dotenv').config();
const express = require("express");
const routes = require("./routes/api");
const cors = require("cors");
const app = express();

const port = process.env.PORT;

//parsing application/json
app.use(express.json());

//enable all request
app.use(cors())

app.use('/openai', routes);

app.listen(port, ()=> console.log(`server is running at port http://localhost:${port}`));