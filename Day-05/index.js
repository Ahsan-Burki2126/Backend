// const { log } = require("console");
const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  fs.readdir("./files", (err, files) => {
    res.render("index", { files: files });
  });
});

app.post("/create", (req, res) => {
  fs.writeFile(
    `./files/${req.body.title.split(" ").join("")}.txt`,
    req.body.details,
    (err) => {
      console.log(err);
    }
  );
  res.redirect("/");
});

app.get("/file/:filename", (req, res) => {
  fs.readFile(`./files/${req.params.filename}`, "utf-8", (err, filedata) => {
    res.render("show", { filename: req.params.filename, filedata: filedata });
    console.log(filedata);
  });
});

app.get("/edit/:filename", (req, res) => {
  res.render("edit", { file: req.params.filename });
});

app.post("/edit", (req, res) => {
  fs.rename(
    `./files/${req.body.previous}`,
    `./files/${req.body.new}`,
    (err) => {
      res.redirect("/");
    }
  );
  // console.log(req.body);
});

app.listen(3000);
