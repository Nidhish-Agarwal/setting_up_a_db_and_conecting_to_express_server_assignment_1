const express = require("express");
const { resolve } = require("path");
const mongoose = require("mongoose");

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "./.env",
  });
}

const app = express();
const port = 3010;

app.use(express.static("static"));

mongoose
  .connect(process.env.DB_URL)
  .then((data) =>
    console.log("DataBase connected Sucessfully", data.connection.host)
  )
  .catch((err) => console.log(err.message));

app.get("/", (req, res) => {
  res.sendFile(resolve(__dirname, "pages/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
