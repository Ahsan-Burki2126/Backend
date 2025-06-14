// Node js Basics
// Intro to Node.js
// installing Node.js and NPM
// Working with MOdules
// File system operations
// Understating http modules

const { log } = require("console");
const fs = require("fs");
const http = require("http");

// fs write file
fs.writeFile("hello.txt", "hello world how are you doing", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("done");
  }
});
// fs append file
fs.appendFile("hello.txt", " i m fine", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("file appended");
  }
});

// fs copyFIle

fs.copyFile("hello.txt", "./Day-02/copy.txt", function (err) {
  if (err) {
    console.log(err);
  } else {
    ("file copied to desitination");
  }
});

// HTTP module ==> is a protocle for sending and recieving data through out the internet.

const server = http.createServer(function (req, res) {
  res.end("hello world");
});

server.listen(3000);
