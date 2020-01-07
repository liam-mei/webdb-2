require("dotenv").config();
const express = require("express");

const server = express();

server.use(logger);

server.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "An error occurred, please try again later."
  });
});

function logger(req, res, next) {
  console.log(`METHOD: ${req.method}, URL: ${req.url}, TIMESTAMP: ${new Date().toDateString()}`);
  next();
}

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
