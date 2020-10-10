import bodyParser from "body-parser";
import "dotenv/config";
import express from "express";
import fetch from "node-fetch";

const app = express();
const BASE_API = "https://api.nasa.gov/mars-photos/api/v1/rovers";
const port = 4040;

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
