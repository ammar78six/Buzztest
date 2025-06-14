require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

const connectDB = require("./db/connect");
connectDB();

const morgan = require("morgan");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req, res) => {
  res.send("Server is up and running");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
