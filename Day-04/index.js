// !form handling and working with the form
// !Handle backend process of forms and making sure to process the data that is coming from any frontend library ,framework or any templating engine

//? cookie & session & blob

// !cookie
// Cookie ek chhoti file hoti hai jo browser ke andar store hoti hai. Jab bhi user kisi website ko visit karta hai, website chhoti info (jaise username, theme, language) ko browser me cookie ke zariye save kar leti hai. Agli baar jab user website par aaye, to website us cookie se pehchan leti hai.

// 🧠 Example: Tum YouTube ka dark mode on karte ho, YouTube us setting ko cookie me store karta hai taake agli baar bhi dark mode dikhaye.

// !session
// Session ek temporary storage hoti hai jo server par banti hai jab user login karta hai. Browser me sirf ek session ID store hoti hai, jab ke asal data (jaise shopping cart, user ID) server par rehta hai. Jab tak session active hota hai, user website me login rehta hai.

// 🧠 Example: Tum Amazon par login karte ho aur cheezen cart me dalte ho — jab tak session active hai, tumhara cart safe rehta hai. Logout ya close karne ke baad session khatam ho jata hai.

const express = require("express");
const app = express();

//?express ko  JSON samajhne ke liye (jab frontend se data json formate me jaye ) eg:

//!fetch('/api', {
//  ! method: 'POST',
//  ! headers: { 'Content-Type': 'application/json' },
//  ! body: JSON.stringify({ name: 'Ahsan', age: 24 })
//! });

app.use(express.json());

// ?express ko  HTML form data samajhne ke liye (jab frontend se data html form k through jaye) eg:
//!<form action="/submit" method="POST">
//!<input type="text" name="username" value="ahsan">
//!<button type="submit">Send</button>
//!</form>

app.use(express.urlencoded({ extended: true }));
