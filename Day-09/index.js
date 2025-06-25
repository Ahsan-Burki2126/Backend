//!mongose is a server of mongoDB that talks with the backend server.
// !ORM (Object Relation Mapping)
//! ODM (Object Docment Mapping)
const userModel = require("./usermodel");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hey");
});

//!CRUD Operations

//?Create
app.get("/create", async (req, res) => {
  let createdUser = await userModel.create({
    name: "Ahsan",
    username: "burki2126",
    email: "ass@gmail.com",
  });
  res.send(createdUser);
});

// ? Update
app.get("/update", async (req, res) => {
  let updatedUser = await userModel.findOneAndUpdate(
    { username: "burki2126" },
    { name: "harshita" },
    { new: true }
  );
  res.send(updatedUser);
});

//? Read
app.get("/read", async (req, res) => {
  let users = await userModel.find(); //*you can pass any key to find specific  document for example username,aur email
  res.send(users);
});

//?Delte
app.get("/delete", async (req, res) => {
  let users = await userModel.findOneAndDelete({ name: "ahsan burki" }); //*you can pass any key to find specific  document for example username,aur email
  res.send(users);
});

app.listen(3000);
