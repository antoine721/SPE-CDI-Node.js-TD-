const express = require("express");
const routes = require("./routes/start");
const app = express();
require("dotenv").config();
const port = 3000;

app.use(express.json());
app.use("/", routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
