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

require("./src/configs/dbConnection");

app.all("/", (req, res) => {
  res.send("WELCOME BLOG API PROJECT");
});

app.use("/blog", require("./src/routes/blog.route"));
app.use(require("./src/middlewares/errorHandler"));
app.listen(PORT, () => console.log(`Server Running on http://${HOST}:${PORT}`));
