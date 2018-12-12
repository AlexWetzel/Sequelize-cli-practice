const express = require("express");
const Sequelize = require('sequelize');
// const bodyParser = require("body-parser");
// If this app had routes, they would be imported here
// const routes = require('./routes/api.js');

const app = express();

const PORT = process.env.PORT || 3001;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// app.use("", routes);

// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// const sequelize = new Sequelize('petsDB', "root", "RootPass", {
//   host: "127.0.0.1",
//   dialect: 'mysql',
//   operatorsAliases: false,

//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   },
// });


// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });


app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
});