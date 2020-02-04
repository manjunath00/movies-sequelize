/* eslint-disable */
const express = require("express");
const morgan = require("morgan");
const path = require('path')
const fs = require('fs');
const cors = require('cors');

const database = require("./database/connection");
// const logger = require('./logs/winston');

// initiate a new instance
const app = express();

let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags : 'a'})

// use logger
app.use(morgan('combined', { stream : accessLogStream }));

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// fix cors issue
app.use(cors());
app.options('*', cors());

// connect to the database
database
  .authenticate()
  .then(res => console.log("Connected to database successfully"));

// sync
// database.sync().then(res => console.log(`Created tables successfully`))
app.get('/hello', (request, response) => {
  response.json(request)
})

// use api routes
app.use("/api/movies", require("./routes/movies"));

// use director api
app.use("/api/directors", require("./routes/directors"));

//
app.get("/", (request, response) => {
  console.log(process.env.PORT)
  response.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// configure port
const PORT = process.env.PORT || 3500;

// listen to the port
app.listen(PORT, () =>
  console.log(`Server started at port ${PORT} & http://localhost:${PORT}`)
);
