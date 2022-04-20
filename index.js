const express = require("express");

const app = express();
const port = 4000;

app.get("/", (req, res) => res.send("Hello"));

app.listen(port, () => console.log(`App listening on port ${port}!`));
