//? Folder Structure
// my-app/
// ├── public/               # Static assets like CSS, JS, images
// │   ├── css/
// │   ├── js/
// │   └── images/
// ├── views/                # EJS templates
// │   ├── partials/         # Reusable EJS parts like header, footer
// │   ├── pages/            # Main page templates (home, about, etc.)
// │   └── index.ejs         # Default page
// ├── routes/               # Express route definitions
// │   └── index.js
// ├── app.js                # Main Express app setup
// ├── package.json          # Project metadata and dependencies
// └── .gitignore            # Files/folders to ignore in Git

const express = require("express"); // !required express
const path = require("path"); //!required path module we will need for specyifying paths for our static files
const app = express(); //!stored express in app variable

app.use(express.json()); //!as mentioned in part-1 it makes the express understand the json data

app.use(express.urlencoded({ extended: true })); //!makes the express understand data came from html forms

app.use(express.static(path.join(__dirname, "public"))); //!specifies the directory for static files

app.set("view engine", "ejs"); //! set the ejs as view engine for front end

app.get("/", (req, res) => {
  res.render("index.ejs"); //! renders the index.ejs page on the "/" route in fron-end
});
app.get("/profile/:username", (req, res) => {
  res.send(req.params.username); //!if we have more than t 1 req.params and if we print req.param we get an object
});

app.listen(3000, () => {
  console.log("server running"); //! prot listening on 3000 port
});

///? Dynamic Routing
//! sab se pehly browser par jao.
//!waha wo url likho jo tmhain chahiye
//!waha error aayega ab usky bad inde.js me akr wo url app.get me banaao
//!ab wo chalny lagyga
//! ab usky bad ye dekho k konsa part dynamic hai to us part k pehly route me : lga do
//?eg app.get("/home/profile/:username") ==> now note that usename is now a variable
//*ab yaha ek bat note krny wlai ye hai k ham is user name ko access bhi kr sakty hain through req.params.username(hr wo cheez jis k aagy : laga ho req.params me aata hai.ie upper wala code dekho)
