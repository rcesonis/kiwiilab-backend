const express = require("express");
const app = express();
const { PORT } = require("./config/constants");
const userRoute = require("./routers/user");

app.use("/", userRoute);

app.listen(process.env.PORT || 4000, () =>
  console.log(`App listening on port ${PORT}!`)
);
