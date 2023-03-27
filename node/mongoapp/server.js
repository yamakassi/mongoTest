const express = require("express");
require("dotenv").config();
const redis = require("redis");
const redisClient = redis.createClient({
  host: "redis",
  port: 6379,
});

const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const db = require("./config/db");
const fs = require('fs');
const app = express();
const PORT = process.env.NODE_DOCKER_PORT;
app.use(bodyParser.urlencoded({ extended: true }));
MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err);
  const myAwesomeDB = database.db();
  require("./app/routes")(app, myAwesomeDB, redisClient);


  app.listen(PORT, function () {
   

    console.log(`Example app listening on port ${PORT}!`);
  });

})


