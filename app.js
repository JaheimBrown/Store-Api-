require("dotenv").config();

const express = require("express");
const app = express();

// async errors

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(
    '<h1>Store Api</h1> | <a href="/api/v1/products">Products route</a>'
  );
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Listening at port: ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
