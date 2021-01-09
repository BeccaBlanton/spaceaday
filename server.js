var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;
//api routes
const routes = require("./routes/index.js");
//models for sequelize
const db = require("./models");


//middleware for express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static directory
app.use(express.static("app/public"));

// Routes
app.use(routes)
// =============================================================

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
