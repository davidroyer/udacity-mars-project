require("dotenv").config();
const { BASE_API } = require("../../config/index.js");
const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("dist"));

app.get("/rovers", async (req, res) => {
  const { name } = req.query;
  const data = await fetch(
    `${BASE_API}/${name}/latest_photos?page=1&api_key=${process.env.API_KEY}`
  );
  const jsonData = await data.json();

  res.send(jsonData);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
