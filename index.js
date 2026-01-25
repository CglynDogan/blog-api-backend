"use strict";

/*
    BLOG API with Mongosse 
*/
// npm i express dotenv express-async-erros
// npm i mongoose
const express = require("express");
const app = express();

/* */

app.use(express.json());

require("dotenv").config();
const PORT = process.env.PORT;
const HOST = process.env.HOST;

// DB Connection //
require("./src/configs/dbConnection");

// ---------------------- //
// SessionCooies:
// https://expressjs.com/en/resources/middleware/cookie-session.html
// https://www.npmjs.com/package/cookie-session
//* $ npm i cookie-session

const session = require("cookie-session");

app.all("/", (req, res) => {
  res.send("WELCOME BLOG API PROJECT");
});

app.use("/user", require("./src/routes/user.router"));
app.use("/blog", require("./src/routes/blog.router"));
app.use(require("./src/middlewares/errorHandler"));
app.listen(PORT, () => console.log(`Server Running on http://${HOST}:${PORT}`));

// require("./src/sync")();
