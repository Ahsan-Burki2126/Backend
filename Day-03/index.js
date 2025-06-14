console.log("welcom to day 03");
// <============================================Day-03(part-1)=================================================================>
// !npm basics
// !installing and uninstalling anything basic
// !understanding node modules
// !dependencies

// !devdependencies(required only during the development but not in deployment,ie "nodemon")

// *scripts - undesrtanding default scrpt paths and custom script ===> when we dont specify any "start" keyword with our script in package.json it means that our opearting system path has that variable already installed or noted in it during the installing of node and npm. now to create custom scripts we need to create the script in package.json and if we want to run it we can specify the "run" with it.

// <=============================================Day-03(part-2)====================================================>
// !Express.js Framework.
// *Intro to Express.js.(is npm package and is js framework that and manages everything from recieving request and sending responses)

// setting up basic Express.js Application.
// Routing

// const express = require("express");
// const app = express();
// let port = 3000;
// app.get("/", (req, res) => {
//   res.send("inshalla i will be consistent");
// });
// app.get("/profile", (req, res) => {
//   res.send("this user is not available right now");
// });

// app.listen(port);

// !Middleware(comes before routes ie if we want to perform sometasks before the request reaches to routes we can use middleware).
// *Explanation of Middleware: when the server accepts the request and is sending back the response to the user so if you want to perform anything in the middle of the response before reaching out to the request handler like logging or printing the user info (who sent the request) we can use middleware.
const express = require("express");
const app = express();
app.use((req, res, next) => {
  console.log("middleware chala");
  next();
});
app.use((req, res, next) => {
  console.log("another middleware chala");
  next();
});

app.get("/", (req, res) => {
  res.send("Middleware test");
});

app.listen(3000);

// ?Request and Response Handling
// Error Handling
