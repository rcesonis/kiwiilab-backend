const express = require("express");
const { PORT } = require("./config/constants");
const userRoute = require("./routers/user");

// Create an express app
const app = express();

/* Middlewares: */

// express.json():be able to read request bodies of JSON requests a.k.a. body-parser
const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

/* Routes */

app.use("/", userRoute);

app.listen(process.env.PORT || 4000, () =>
  console.log(`App listening on port ${PORT}!`)
);
